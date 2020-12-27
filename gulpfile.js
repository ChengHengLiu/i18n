const { series, src, dest } = require('gulp');

const babel = require('gulp-babel');
const js = function() {
	return src('src/**/*.js').pipe(babel()).pipe(dest('build'));
};
const view = function() {
	return src('src/**/*.html').pipe(dest('build'));
};
exports.default = series(js, view);
