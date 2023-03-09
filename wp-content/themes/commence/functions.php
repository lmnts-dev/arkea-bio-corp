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

function mobile_nav () {
    if(window.scrollY==0){
        console.log('at top');
    }
    else{
        console.log('not at top');
    }
}
