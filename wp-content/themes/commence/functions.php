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
