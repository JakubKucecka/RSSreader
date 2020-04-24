module.exports = function (grunt) {
    const mozjpeg = require('imagemin-mozjpeg');

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
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [mozjpeg()]
                },
                files: {
                    'icon.ico': 'icon.ico',
                    'imgnotfound.jpg': 'imgnotfound.jpg'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,ico}'],
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['cssmin']);
    grunt.registerTask('default', ['htmlmin']);
    grunt.registerTask('default', ['imagemin']);

};
