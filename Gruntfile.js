module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['server/public/', 'tmp'],
        watch: {
            scripts: {
                files: ['client/scripts/**/*.js'],
                tasks: ['babel'],
                options: {
                    spawn: false,
                },
            },
            copy: {
                files: ['client/index.html', 'client/lib/**/*'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                }
            },
        },
        copy: {
            index: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['client/index.html'],
                    dest: 'server/public/',
                    filter: 'isFile'
                }]
            },
            lib: {
                files: [{
                    expand: true,
                    cwd: 'client/lib/',
                    src: ['**/*'],
                    dest: 'server/public/lib'
                }]
            },
        },
        babel: {
            options: {
                sourceMap: true,
                experimental: true,
                modules: 'amd',
                // moduleIds: true,
                // sourceRoot: 'public/scripts'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'client/scripts/',
                    src: ['**/*.js'],
                    dest: 'server/public/scripts',
                    ext: '.js',
                }]
            }
        },
        browserify: {
            dist: {
                files: {
                    'server/public/scripts/main.js': ['server/public/scripts/app.js'],
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: '.',
                    name: 'client/lib/almond/almond.js',
                    include: ['server/public/scripts/app'],
                    out: 'server/public/scripts/app.min.js',
                    wrap: true,
                    insertRequire: ['server/public/scripts/app']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'babel', 'watch']);

};
