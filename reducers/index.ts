import { combineReducers } from 'redux'
import ReducerAuth from './ReducerAuth';

const rootReducer = combineReducers({
    ReducerAuth,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
export type RootActionType = {
    type: String,
    data: Array<Object>,
}
