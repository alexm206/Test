module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          options: {
            separator: ';'
          },
          dist: {
           src: [
               'js/libs/*.js', // Все JS в папке libs
               'js/script.js'  // Конкретный файл
           ],
           dest: 'js/production.js',
         },
       },
       uglify: {
         dist: {
          src: [
              'js/production.js'  // Конкретный файл
          ],
          dest: 'js/production.min.js',
        },
       }
    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify']);

};
