import React, { createContext, useContext } from 'react'
import {rootReducerCombined,initialStateCombined} from './rootReducer'

const Store = createContext({})
export const useStore = () => {
  return useContext(Store)
}

export default function StoreProvider (props) {
  const [state, dispatch] = React.useReducer(rootReducerCombined,initialStateCombined);
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
