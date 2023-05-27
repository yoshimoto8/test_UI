
import React, { useEffect } from 'react'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'

type Props = {}
const tabData = [{ id: 1, label: 'Tab 1', content: 'Tab 1 content' }, { id: 2, label: 'Tab 2', content: 'Tab 2 content' }, { id: 3, label: 'Tab 3', content: 'Tab 3 content' }]
export const Tabs: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = React.useState(tabData[0].id)
  const focusRef = React.useRef<number[]>([])

  useEffect(() => {
    focusRef.current = tabData.map((_, i) => i)
  }, [])

  useEffect(() => {
    const tabElement = document.querySelector(`button[tabindex="0"]`);
    if (tabElement) {
      (tabElement as HTMLElement).focus();
    }
  }, [activeTab])

  const handleClick = (tabId: number) => {
    setActiveTab(tabId)
  }

  const handleFocus = (tabId: number) => {
    setActiveTab(tabId)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const index = focusRef.current.indexOf(tabData.findIndex(tab => tab.id === activeTab));
    if (e.key === 'ArrowRight') {
      const newIndex = index === focusRef.current.length - 1 ? 0 : index + 1;
      setActiveTab(tabData[focusRef.current[newIndex]].id);
    } else if (e.key === 'ArrowLeft') {
      const newIndex = index === 0 ? focusRef.current.length - 1 : index - 1;
      setActiveTab(tabData[focusRef.current[newIndex]].id);
    }
  }

  return (
    <div role='tablist' onKeyDown={handleKeyDown}>
      {tabData.map((tab) => {
        return (
          <Tab
            key={tab.id}
            tabId={tab.id}
            activeTab={activeTab}
            onClick={handleClick}
            onFocus={handleFocus}
            tabIndex={tab.id === activeTab ? 0 : -1}
          >
            {tab.content}
          </Tab>
        )
      })}

      {tabData.map((tab) => {
        return (
          <TabPanel
            key={tab.id}
            activeTab={activeTab}
            tabId={tab.id}
            tabIndex={tab.id === activeTab ? 0 : -1}
          >
            {tab.content}
          </TabPanel>
        )
      })}
    </div>
  )
}