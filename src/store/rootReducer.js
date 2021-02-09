import combineReducers from 'react-combine-reducers'
import tinderCardsReducer, {tinderCardReducerInitials} from './reducers/tinderCardsReducers'

export const [rootReducerCombined, initialStateCombined] = combineReducers({
  tinderCardsReducer: [tinderCardsReducer, tinderCardReducerInitials]
})
