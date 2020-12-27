const i18n = {
	'zh-tw': {
		text: '狐狸說什麼'
	},
	en: {
		text: 'what the fox say?'
	}
};
const textDom = document.getElementById('text');
const selectDOM = document.getElementById('ln');
const onSelectChange = () => {
	const value = selectDOM.value;
	textDom.innerText = i18n[value].text;
};
window.onload = onSelectChange;
selectDOM.addEventListener('change', onSelectChange);
