import express from 'express';
import { publicPath } from './constants';
import i18nServer from './router/i18nServer';

const app = new express();
app.get('/i18n/server', i18nServer);

app.use('/i18n/client', express.static(publicPath));

app.listen(4200, () => {
	console.log('start');
});
