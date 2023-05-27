import React from 'react'

type TabProps = {
  tabId: number
  children: React.ReactNode
  activeTab: number
  onClick: (tabId: number) => void
  onFocus: (tabId: number) => void
  tabIndex: number
}

export const Tab: React.FC<TabProps> = ({ children, tabId, activeTab, tabIndex, onFocus, onClick }) => {
  return (
    <button
      role="tab"
      aria-selected={activeTab === tabId}
      tabIndex={tabIndex}
      onClick={() => onClick(tabId)}
      onFocus={() => onFocus(tabId)}
    >
      {children}
    </button>
  );
};