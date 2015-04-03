module.exports = function(grunt) {
	grunt.initConfig({
		concat:{
			main: {
			src: ['public/javascripts/*.js'],
			dest: 'public/javascripts/gs.js'
			}runtscript
		},
		uglify:{
			main:{
				files:{
					'public/javascripts/grunt.min.js': '<%=concat.main.dest%>'
				}
			}
		}
  });
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('default', ['concat', 'uglify']);
};