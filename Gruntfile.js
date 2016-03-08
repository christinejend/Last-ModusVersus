/* hepl-mmi/workflow
 *
 * /Gruntfile.js - Grunt configuration file
 *
 * coded by leny@flatLand!
 * started at 11/02/2016
 */

"use strict";

module.exports = function( grunt ) {

    // 1. load tasks
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-cowsay" );
    grunt.loadNpmTasks( "grunt-eslint" );
    grunt.loadNpmTasks( "grunt-sass" );

    // 2. configure tasks
    grunt.initConfig( {
        // cowsay
        "cowsay": {
            "done": {
                "options": {
                    "message": "I'm done!"
                }
            }
        },
        // eslint
        "eslint": {
            "options": {
                "configFile": ".eslintrc.json"
            },
            "scripts": [ "scripts/**/*.js" ]
        },
        // sass
        "sass": {
            "options": {
                "sourceMap": true
            },
            "styles": {
                "files": {
                    "css/styles.css": "sass/styles.scss"
                }
            }
        },
        // watch
        "watch": {
            "options": {
                "spawn": false
            },
            "scripts": {
                "files": [ "scripts/**/*.js" ],
                "tasks": [ "eslint" ]
            },
            "styles": {
                "files": [ "sass/**/*.scss" ],
                "tasks": [ "sass:styles" ]
            }
        }
    } );

    // 3. aliases
    grunt.registerTask( "default", [
        "build",
        "analyse",
        "cowsay:done"
    ] );

    grunt.registerTask( "build", [ "sass:styles" ] );

    grunt.registerTask( "analyse", [ "eslint:scripts" ] );

    grunt.registerTask( "work", [
        "build",
        "analyse",
        "browserSync",
        "watch"
    ] );
};
