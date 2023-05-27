import React from 'react'

export type RadioProps = {
  children?: React.ReactNode
  name: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  ref?: React.Ref<HTMLInputElement>
  ariaChecked: boolean
  tabIndex: 0 | -1
  value: string | number
}

const Radio: React.FC<RadioProps> = React.forwardRef<HTMLInputElement, RadioProps>(({ name, onChange, onBlur, children, ariaChecked, tabIndex, value }, ref) => {
  return (
    <span>
      <span>
        <input name={name} onChange={onChange} onBlur={onBlur} ref={ref} type='radio' role='radio' aria-checked={ariaChecked} tabIndex={tabIndex} value={value} />
      </span>
      <span>
        <label htmlFor=":inputRadio">
          {children}
        </label>
      </span>
    </span>
  )
})

Radio.displayName = 'Radio';


export { Radio }