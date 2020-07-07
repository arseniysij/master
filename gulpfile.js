var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify-es').default,
		cleancss     = require('gulp-clean-css'),
		autoprefixer = require('gulp-autoprefixer'),
		rsync        = require('gulp-rsync'),
		newer        = require('gulp-newer'),
		rename       = require('gulp-rename'),
		responsive   = require('gulp-responsive'),
		del          = require('del'),
		webp 		 = require('gulp-webp');

// Local Server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done(); };

// Custom Styles
gulp.task('styles', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({
		outputStyle: 'expanded',
		includePaths: [__dirname + '/node_modules']
	}))
	.pipe(concat('styles.min.css'))
	.pipe(autoprefixer({
		grid: true,
		overrideBrowserslist: ['last 10 versions']
	}))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Optional. Comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

// Scripts & JS Libraries
gulp.task('scripts', function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.min.js', // Optional jQuery plug-in (npm i --save-dev jquery)
		'app/js/_jquery.nice-select.min.js', // custom select
		'app/js/_parallax.min.js', // paralax on mouse
		'app/js/_aosjs', // showup element
		// 'app/js/_modernizr-custom.js', // bg webp
		'app/js/_libs.js', // JS libraries (all in one)
		'app/js/_custom.js', // Custom scripts. Always at the end
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Minify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

// Responsive Images
var quality = 95; // Responsive images quality

// Produce @1x images
gulp.task('img-responsive-1x', async function() {
	return gulp.src('app/img/_src/**/*.{png,jpg,jpeg,webp,raw}')
		.pipe(newer('app/img/@1x'))
		.pipe(responsive({
			'**/*': { width: '50%', quality: quality }
		})).on('error', function (e) { console.log(e) })
		.pipe(rename(function (path) {path.extname = path.extname.replace('jpeg', 'jpg')}))
		.pipe(gulp.dest('app/img/@1x'))
});
// Produce @2x images
gulp.task('img-responsive-2x', async function() {
	return gulp.src('app/img/_src/**/*.{png,jpg,jpeg,webp,raw}')
		.pipe(newer('app/img/@2x'))
		.pipe(responsive({
			'**/*': { width: '100%', quality: quality }
		})).on('error', function (e) { console.log(e) })
		.pipe(rename(function (path) {path.extname = path.extname.replace('jpeg', 'jpg')}))
		.pipe(gulp.dest('app/img/@2x'))
});

// Конвертация в webP
gulp.task('webp-1x', async function() {
	return gulp.src('app/img/_src/**/*.{png,jpg,jpeg,webp,raw}')
		.pipe(newer('app/img/@webp1x'))
		.pipe(responsive({
			'**/*': { width: '50%', quality: quality }
		})).on('error', function (e) { console.log(e) })
		.pipe(webp({
				lossless: true	
			}))
			.pipe(gulp.dest('app/img/webp@1x'))
});

// Конвертация в webP
gulp.task('webp-2x', async function() {
	return gulp.src('app/img/_src/**/*.{png,jpg,jpeg,webp,raw}')
		.pipe(newer('app/img/@webp2x'))
		.pipe(responsive({
			'**/*': { width: '100%', quality: quality }
		})).on('error', function (e) { console.log(e) })
		.pipe(webp({
				lossless: true	
			}))
			.pipe(gulp.dest('app/img/webp@2x'))
});

gulp.task('img', gulp.series('img-responsive-1x', 'img-responsive-2x', bsReload));
gulp.task('make-webp', gulp.parallel('webp-1x', 'webp-2x', bsReload));


// Clean @*x IMG's
gulp.task('cleaning', function() {
	return del(['app/img/@*', 'app/img/webp@*'], { force: true })
});

// Code & Reload
gulp.task('code', function() {
	return gulp.src('app/**/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

// Deploy
gulp.task('rsync', function() {
	return gulp.src('app/')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Included files
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excluded files
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('styles'));
	gulp.watch(['app/js/_custom.js', 'app/js/_libs.js'], gulp.parallel('scripts'));
	gulp.watch('app/*.html', gulp.parallel('code'));
	gulp.watch('app/img/_src/**/*', gulp.parallel('img', 'make-webp'));
});

// gulp.task('default', gulp.parallel('img', 'make-webp', 'styles', 'scripts', 'browser-sync', 'watch'));
gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));
