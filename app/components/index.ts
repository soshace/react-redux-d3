import ChartReducer from './chart/reducer'
import MainReducer from './main/reducer'
import StatPanelReducer from './stat-panel/reducer'
import {combineReducers} from 'redux'

export default combineReducers({ChartReducer, MainReducer, StatPanelReducer})