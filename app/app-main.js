'use client';


// import { ThemeProvider } from '@/components/theme-provider'
import { PageTabs } from '@/components/page-tabs'
import { Menu } from '@/components/menu'

import { useReducer, useEffect } from 'react'

const initialState = {
  tabs: [
    {
      id: 0,
      title: 'TAB_0',
      childNode: <h1>Default Child : TAB_0</h1>
    }
  ],
  currentTabIdx: 0,
}

let _idx = 1

// the heart of state mgmt.
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TAB': {
      const id = _idx++
      const item = {
        id,
        title: action.payload?.title || `TAB_${id}`,
        childNode: action.payload?.childNode
      }

      return {
        ...state,
        currentTabIdx: state.tabs.length,
        tabs: [...state.tabs, item]
      }
    }
    case 'DELETE_TAB': {
      const index = state.tabs.findIndex(t => t.id === action.payload)

      return {
        ...state,
        currentTabIdx: index === state.tabs.length - 1 ? state.currentTabIdx - 1 : state.currentTabIdx,
        tabs: state.tabs.filter(tab => tab.id !== action.payload)
      }
    }

    case 'SET_CURRENT_TAB_IDX': {
      return {
        ...state,
        currentTabIdx: action.payload
      }
    }
    case 'CHANGE_CURRENT_CHILDNODE': {
      const newTabs = [...state.tabs]
      console.log(action.payload)
      if (action.payload.title) {
        const id = state.tabs[state.currentTabIdx].id
        newTabs[state.currentTabIdx].title = `${action.payload.title} [${id}]`
      }
      newTabs[state.currentTabIdx].childNode = action.payload.childNode

      return {
        ...state,
        tabs: newTabs
      }
    }
    default:
      return state
  }
}

export const AppMain = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
      <Menu tabs={state.tabs} dispatch={dispatch} />
      <PageTabs tabs={state.tabs} currentTabIdx={state.currentTabIdx} dispatch={dispatch}>
        {children}
      </PageTabs>
      {/* </ThemeProvider> */}
    </div>
  )
}
