=== CMB2 Plus ===
Contributors: s3rgiosan
Tags: cmb2
Requires at least: 4.0
Tested up to: 4.8
Stable tag: 2.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Common utility classes for the CMB2 plugin on WordPress.

== Description ==

Common utility classes for the CMB2 plugin on WordPress.

== Usage ==

= Static page `show_on` filter =

This allows a metabox to only be shown if a static page is set (Settings > Reading Settings) and you're editing it.

For a front page:

```php
'show_on' => array( 'key' => 'static-page', 'value' => 'page_on_front' )`
```

For a posts page:

```php
'show_on' => array( 'key' => 'static-page', 'value' => 'page_for_posts' )`
```

== Changelog ==

= 2.0.0 =
* Project fork (thanks to @log-oscon for the time made available for the development of this plugin).
* Removed the `get_term_options` function.
* Grunt tasks revised.
* Renamed PHPCS file.

= 1.0.0 =
* Initial release.   
