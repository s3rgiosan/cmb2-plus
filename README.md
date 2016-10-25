# CMB2 Plus #

Common utility classes for the CMB2 plugin on WordPress.

## Usage ##

### A dropdown for taxonomy terms which does NOT set the term on the post ###

```php
$cmb->add_field( array(
    'name'           => 'Featured Category',
    'desc'           => 'Set a featured category for this post.',
    'id'             => '_cmb2_featured_category',
    'type'           => 'select',
    'options_cb'     => 'cmb2_get_term_options',
    'get_terms_args' => array(
        'taxonomy'   => 'category',
        'hide_empty' => false,
    ),
) );
```

### Front Page show_on filter ###

This shows only if a static page is set and you're editing it.

```php
'show_on' => array( 'key' => 'front-page', 'value' => '' ),
```

## Changelog ##

### 1.0.0 ###
* Initial release.   
