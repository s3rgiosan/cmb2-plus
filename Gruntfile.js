/* global module require process */
module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks',
      staticMappings: {
        makepot: 'grunt-wp-i18n',
      },
    },
    data: {
      i18n: {
        author: 'Sérgio Santos <me@s3rgiosan.com>',
        support: 'https://github.com/s3rgiosan/cmb2-plus/issues',
        pluginSlug: 'cmb2-plus',
        mainFile: 'cmb2-plus',
        textDomain: 'cmb2-plus',
        potFilename: 'cmb2-plus',
      },
      badges: {
        packagist_stable:    '',
        packagist_downloads: '',
        packagist_license:   '',
        codacy_grade:        '',
        codeclimate_grade:   '',
      },
    },
  });
};
