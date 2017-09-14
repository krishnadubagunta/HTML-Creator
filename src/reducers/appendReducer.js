import { APPEND_TO_LAST } from './types';

export default function appendToLast(state = {}, action) {
	switch (action.type) {
		case APPEND_TO_LAST:
			const data = action.payload;
			return { ...state, data };
		default:
			return state;
	}
}
