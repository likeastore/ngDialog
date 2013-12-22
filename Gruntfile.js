module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},
			avgrund: {
				files: {
					'./js/ngDialog.min.js': ['./js/ngDialog.js']
				}
			}
		},
		jshint: {
			options: {
				ignores: ['./js/ngDialog.min.js']
			},
			files: ['*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('build', ['uglify']);
};