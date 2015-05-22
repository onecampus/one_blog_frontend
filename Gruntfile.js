module.exports = function(grunt) {
		grunt.initConfig({
				jshint: {
						options: {
								bitwise:true,
								curly:true,
								boss:true,
								eqeqeq :true,
								immed :true,
								maxerr :3,
								newcap :true,
								noarg:true,
								noempty:true,
								nomen :true,
								passfail :true,
								plusplus :true,
								regexp :true,
								undef :true,
								sub :true,
								freeze:true,
								latedef:true,
								quotmark:'single',
								unused: true,
								maxparams: 4,
								maxdepth: 4,
								maxlen: 600,
								browser: true,
								devel: true,
								camelcase : true,
								forin : true,
								indent : 2,
								nonbsp : true,
								nonew : true,
								trailing : true,
								globals:{
										module:true,
										require:true,
										$:true
								}
						},
						files: ['Gruntfile.js', 'js/index.js']
				}
		});
		require('load-grunt-tasks')(grunt);
		grunt.registerTask('default', ['jshint']);
};