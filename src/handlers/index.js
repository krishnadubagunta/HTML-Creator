export const handleSpecialChars = (e, done) => {
	switch (e.keyCode) {
		case 13:
			done({ build: '<br />', data: '\n' });
			break;
		case 8:
			done({ backspace: true });
			break;
		case 9:
			break;
		case 37:
			break;
		case 38:
			break;
		case 39:
			break;
		case 40:
			break;
		case 91:
			break;
		case 93:
			break;
		case 16:
			break;
		case 17:
			break;
		case 18:
			break;
		default:
			done({ data: e.key });
	}
};
