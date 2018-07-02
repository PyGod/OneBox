'use strict';

import gulp from 'gulp4';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import clean from 'gulp-clean';
import uglify from 'gulp-uglifyjs';
import  cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

gulp.task('html', (done)=> {
	return gulp.src('src/*.html')
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload({stream : true}))
	done();
});

gulp.task('sass', (done)=> {
	return gulp.src('src/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('src/css/'))
	.pipe(browserSync.reload({stream: true}))
	done();
});

gulp.task('css:minify', ()=> {
	return gulp.src('src/css/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({stream: true}))
	done();
})


gulp.task('es6:minify', (done)=> {
	return gulp.src('src/js/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}))
	done();
});

gulp.task('img', ()=> {
	return gulp.src('src/img/**/*') 
	.pipe(imagemin({ 
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'))
	.pipe(browserSync.reload({stream: true}))
	done();
});

gulp.task('fonts', ()=>{
	return gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
	.pipe(browserSync.reload({stream: true}))
	done();
})

gulp.task('clean', ()=> {
	return gulp.src('dist', {read: false})
	.pipe(clean())
	.pipe(browserSync.reload({stream : true}))
	done();
})

gulp.task('browser-sync', (done)=> {
	browserSync.create();
	browserSync.init({
		server: {
			baseDir: 'src/'

		}
	});
});

gulp.task('default', gulp.parallel('browser-sync', 'html', 'sass', 'css:minify', 'es6:minify', 'img', 'fonts', (done)=> {
	gulp.watch('src/index.html', gulp.parallel('html'));
	gulp.watch('src/sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch('src/js/app.js', gulp.parallel('es6:minify'));
	
	done();
}));

