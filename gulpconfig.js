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
	// scripts configuration
	config.scripts = {
		bootstrap: {
			filename: 'bootstrap.js',
			files:    [
				config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/affix.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/alert.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/button.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/carousel.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/collapse.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/dropdown.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/tab.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/transition.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/scrollspy.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/modal.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/tooltip.js"
				, config.path.vendorDir + "twbs/bootstrap/assets/javascripts/bootstrap/popover.js"
			]
		}
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
			src:           config.images.spriteDir + '**/*.{png,jpg}'
			, cssPath:     '../../images/' // dist/css to images/ folder relative path
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
