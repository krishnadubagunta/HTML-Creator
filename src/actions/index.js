import { APPEND_TO_LAST } from '../reducers/types';

export const build = text => {
	return {
		type: APPEND_TO_LAST,
		payload: text
	};
};
