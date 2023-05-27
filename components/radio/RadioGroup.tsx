import React from 'react'

type Props = {
  children: React.ReactNode
}

export const RadioGroup: React.FC<Props> = ({ children }) => {
  return (
    <div role='radiogroup' aria-labelledby="group_label" >
      {children}
    </div>
  )
}