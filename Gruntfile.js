module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            css: {
                src: 'stylesheet.css',
                dest: 'stylesheet.css'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'index.html',
                }
            },
            dev: {
                files: {
                    'index.html': 'index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['htmlmin']);
    grunt.registerTask('default', ['cssmin']);

};
