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
                    use: [mozjpeg()] // Example plugin usage
                },
                files: {
                    'imgnotfound.jpg': 'imgnotfound.jpg',
                    'icon.ico': 'icon.ico',
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['**/*.{jpg,ico}'],
                    dest: ''
                }]
            }
        },
        uglify: {
            my_target:{
                files: {
                    'script.js':['script.js']
                    'Gruntfile.js':['Gruntfile.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']);
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['htmlmin']);
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

};
