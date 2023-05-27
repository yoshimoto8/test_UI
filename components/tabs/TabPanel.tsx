
import React from 'react'

type TabPanelProps = {
  children: React.ReactNode
  activeTab: number
  tabId: number
  tabIndex: number
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, activeTab, tabIndex, tabId }) => {
  if (activeTab !== tabId) {
    return null
  }

  return (
    <div
      role='tabpanel'
      aria-hidden={activeTab !== tabId}
      hidden={activeTab !== tabId}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  )
}
