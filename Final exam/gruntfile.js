module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['styles/reset.scss','styles/variables.scss','styles/mixins.scss','styles/mobile-style.scss','styles/tablet-style.scss','styles/desktop-style.scss','styles/large-style.scss'],
        dest: 'styles/main.scss',
      }
    },
    uglify: {
      dist: {
        src: ['js/script.js'],
        dest: 'js/script.min.js'
      }
      },

    sass: {
      dist: {
          files: [{
            expand: true,
            cwd: 'styles',
            src: ['main.scss'],
            dest: 'css',
            ext: '.css'
          }]
      }
    },

    watch: {
      sass: {
        files: ['styles/*.scss'],
        tasks: ['concat', 'sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
};
