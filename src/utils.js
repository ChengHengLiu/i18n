import { readFileSync } from 'fs';

const render = (filename, params) => {
	let data = readFileSync(filename, 'utf8');
	for (const key in params) {
		data = data.replace('{' + key + '}', params[key]);
	}
	return data;
};
export default { render };
