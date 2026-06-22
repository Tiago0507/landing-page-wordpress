<?php

function servicios_apros_template_include( $template ) {
    if ( is_page( 'servicios-apros' ) ) {
        $custom_template = get_stylesheet_directory() . '/page-servicios-apros.php';
        if ( file_exists( $custom_template ) ) {
            return $custom_template;
        }
    }
    return $template;
}
add_filter( 'template_include', 'servicios_apros_template_include' );

function servicios_apros_enqueue_assets() {
    if ( is_page( 'servicios-apros' ) ) {
        wp_enqueue_style(
            'servicios-apros-landing',
            get_stylesheet_directory_uri() . '/css/landing.css',
            array(),
            '1.0.0'
        );

        wp_enqueue_script(
            'servicios-apros-landing',
            get_stylesheet_directory_uri() . '/js/landing.js',
            array(),
            '1.0.0',
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'servicios_apros_enqueue_assets' );

function servicios_apros_setup_theme() {
    $page = get_page_by_path( 'servicios-apros' );

    if ( ! $page ) {
        $page_id = wp_insert_post( array(
            'post_title'  => 'Servicios APROS',
            'post_name'   => 'servicios-apros',
            'post_status' => 'publish',
            'post_type'   => 'page',
        ) );
    } else {
        $page_id = $page->ID;
    }

    update_option( 'show_on_front', 'page' );
    update_option( 'page_on_front', $page_id );
}
add_action( 'after_switch_theme', 'servicios_apros_setup_theme' );
