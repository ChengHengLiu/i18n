import utils from '../utils';
import i18n from '../i18n';
import path from 'path';

export default (req, res) => {
	const htmlPath = path.resolve(__dirname, '../view/index.html');
	const ln = req.query.ln;
	if (ln) {
		const data = utils.render(htmlPath, { text: i18n[ln].text, options: options(ln) });
		res.send(data);
	} else {
		res.send(null);
	}
};

const options = (ln) => `
<option value="zh-tw" ${ln === 'zh-tw' ? 'selected' : ''}>中文</option>
<option value="en" ${ln === 'en' ? 'selected' : ''}>English</option>
`;
