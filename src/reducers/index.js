import { combineReducers } from 'redux';
import appendToLast from './appendReducer';

const rootReducer = combineReducers({
	preview: appendToLast
});

export default rootReducer;
