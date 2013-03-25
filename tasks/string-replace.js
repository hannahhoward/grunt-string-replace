/*
 * grunt-string-replace
 * https://github.com/erickrdch/grunt-string-replace
 *
 * Copyright (c) 2012 Erick Ruiz de Chavez
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // if grunt is not provided, then expose internal API
  if ('object' !== typeof(grunt)) {
    return require('./lib/string-replace').init(require('grunt'));
  }

  var string_replace = require('./lib/string-replace').init(grunt);

  grunt.registerMultiTask('string-replace', 'String Replace Task.', function() {
    var replacements;

    var options = this.options({
      replacements: []
    });

    replacements = string_replace.normalize_replacements(options.replacements);
    string_replace.replace(this.files, replacements);
  });
};
