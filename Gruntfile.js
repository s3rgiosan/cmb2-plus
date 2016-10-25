module.exports = function (grunt) {

  var pkg = grunt.file.readJSON('package.json');

  var config = {
    author:      'Sérgio Santos <me@s3rgiosan.com>',
    support:     'https://github.com/log-oscon/cmb2-plus/issues',
    pluginSlug:  'cmb2-plus',
    mainFile:    'cmb2-plus',
    textDomain:  'cmb2-plus',
    potFilename: 'cmb2-plus'
  };

  // Project configuration
  grunt.initConfig({

    pkg: pkg,

    checktextdomain: {
      options: {
        text_domain:    config.textDomain,
        correct_domain: false,
        keywords:       [
          '__:1,2d',
          '_e:1,2d',
          '_x:1,2c,3d',
          'esc_html__:1,2d',
          'esc_html_e:1,2d',
          'esc_html_x:1,2c,3d',
          'esc_attr__:1,2d',
          'esc_attr_e:1,2d',
          'esc_attr_x:1,2c,3d',
          '_ex:1,2c,3d',
          '_n:1,2,4d',
          '_nx:1,2,4c,5d',
          '_n_noop:1,2,3d',
          '_nx_noop:1,2,3c,4d',
          ' __ngettext:1,2,3d',
          '__ngettext_noop:1,2,3d',
          '_c:1,2d',
          '_nc:1,2,4c,5d'
        ]
      },
      files: {
        src: [
          'lib/**/*.php',
          config.mainFile + '.php',
          'uninstall.php'
        ],
        expand: true
      }
    },

    makepot: {
      target: {
        options: {
          cwd:         '',
          domainPath:  '/languages',
          potFilename: config.potFilename + '.pot',
          mainFile:    config.mainFile    + '.php',
          include:     [],
          exclude:     [
            'assets/',
            'bin/',
            'build/',
            'languages/',
            'node_modules',
            'release/',
            'svn/',
            'tests/',
            'tmp',
            'vendor'
          ],
          potComments: '',
          potHeaders:  {
            poedit:                  true,
            'x-poedit-keywordslist': true,
            'language':              'en_US',
            'report-msgid-bugs-to':  config.support,
            'last-translator':       config.author,
            'language-Team':         config.author
          },
          type:            'wp-plugin',
          updateTimestamp: true,
          updatePoFiles:   true,
          processPot:      null
        }
      }
    },

    wp_readme_to_markdown: {
      main: {
          files: {
            'README.md': 'README.txt'
          },
      },
    }

  });

  // Load tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'readme',
    'pot',
    'build',
  ]);

  grunt.registerTask('readme', [
    'wp_readme_to_markdown',
  ]);

  grunt.registerTask('pot', [
    'checktextdomain',
    'makepot',
  ]);

  grunt.registerTask('build', [
    'composer:install',
    'composer:dump-autoload:optimize',
  ]);

  grunt.util.linefeed = '\n';
};
