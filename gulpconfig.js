//
// Global Gulp configuration file
module.exports = function () {

	//
	// Init Config
	var config = {};

	//
	// Folders configuration
	var rootDir     = "./"
		, distDir   = rootDir + "dist/"
		, imagesDir = rootDir + "images/"
		, jsDir     = rootDir + "js/"
		, stylesDir = rootDir + "sass/";

	config.path = {
		rootDir: rootDir

		, distDir:    distDir
		, distCssDir: distDir + "css/"
		, distJsDir:  distDir + "js/"

		, imagesDir: imagesDir

		, jsDir:     jsDir
		, stylesDir: stylesDir

		, vendorDir: rootDir + "vendor/"
	};

	//
	// Images configuration
	config.images = {
		spriteDir: config.path.imagesDir + "sprite/"
	};

	//
	// Styles configuration
	config.styles = {
		files: config.path.stylesDir + "styles.scss"
	};

	//
	// Tasks configuration
	config.tasks = {
		alias: "cs"
	};

	//
	// Plugins configuration
	config.plugins = {
		autoprefixer: {
			browsers: 'last 1 version, > 10%, iOS >= 7',
			cascade:  false
		},
		critical:     {},
		cssBase64:    {
			maxWeightResource: 8 * 1024
		},
		imagemin:     {
			verbose: true
		},
		sass:         {
			prod: {
				outputStyle: 'compressed'
			},
			dev:  {
				outputStyle: 'nested'
			}
		},
		sourcemaps:   {
			includeContent: false
			, sourceRoot:   config.stylesDir
		},
		sprity:       {
			src:           config.images.spriteDir + '*.png'
			, cssPath:     config.path.imagesDir
			, margin:      8
			, name:        'sprite'
			, orientation: 'binary-tree'
			, prefix:      'sprite'
			, processor:   'css'
			, style:       '_sprite.scss'
			, template:    config.path.rootDir + 'gulp/.sprity.hbs'
		},
		uglify:       {}
	};

	return config;
};
