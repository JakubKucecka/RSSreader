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
                    'dist/index.html': 'src/index.html',
                }
            },
            dev: {
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['htmlmin']);
    grunt.registerTask('default', ['cssmin']);

};
