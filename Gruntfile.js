'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          './min/emergencyEarthquake.html': './emergencyEarthquake.html',
          './min/emergencyFire.html': './emergencyFire.html',
          './min/emergencyFlood.html': './emergencyFlood.html',
          './min/emergencyHurricane.html': './emergencyHurricane.html',
          './min/emergencyTsunami.html': './emergencyTsunami.html',
          './min/emergencyVolcanicEruption.html': './emergencyVolcanicEruption.html'
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['htmlmin']);
};
