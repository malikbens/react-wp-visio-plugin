<?php 
/**
 * Plugin Name: MultiStep visio form
 */
defined( 'ABSPATH' ) || die();

add_shortcode( 'multistep_visio_form', 'multistep_visio_form' );
function multistep_visio_form( $atts = array(), $content = null , $tag = 'multistep_visio_form' ){
    ob_start();
    ?>
        <div id="app">App goes here</div>
        <?php wp_enqueue_script( 'multistep_visio_form', plugins_url( 'build/index.js', __FILE__ ), array( 'wp-element' ), time(), true ); ?>
    <?php return ob_get_clean();
}