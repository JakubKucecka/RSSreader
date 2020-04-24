module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            css: {
                src: 'stylesheet.css',
                dest: 'stylesheet.css'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']);
    
}