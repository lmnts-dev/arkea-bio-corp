<?php
//* Code goes here

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles', 11 );

function my_theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_uri() );
}

function year_shortcode () {
    $year = date_i18n ('Y');
    return $year;
}

add_shortcode ('year', 'year_shortcode');

/* Custom script with no dependencies, enqueued in the footer */

add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');
function  my_theme_enqueue_scripts() {
    wp_enqueue_script('custom', get_stylesheet_directory_uri().'/js/theme.js', 
    array(), false, true);
}

function disable_smooth_scroll() {
    wp_enqueue_script('disable-smooth-scroll', get_stylesheet_directory_uri() . '/js/disable-smooth-scroll.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'disable_smooth_scroll');
