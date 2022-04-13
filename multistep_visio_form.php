<?php

/**
 * Plugin Name: MultiStep visio form
 */

defined('ABSPATH') || die();
function booked()
{
    $booked = do_shortcode("[booked-calendar]");
    echo $booked;
}


add_shortcode('multistep_visio_form', 'multistep_visio_form');
function multistep_visio_form($atts = array(), $content = null, $tag = 'multistep_visio_form')
{
    ob_start();
?>
    <div id="app">App goes here</div>
    <div>
        <!-- <?php booked() ?> -->
    </div>
    <?php wp_enqueue_script('multistep_visio_form', plugins_url('build/index.js', __FILE__), array('wp-element'), time(), true); ?>
<?php return ob_get_clean();
};

add_action('init', 'getUsr');
function getUsr(){
    if( is_user_logged_in() ) {
        $current_user = wp_get_current_user();
        $current_username = $current_user->user_login;
        echo  '<input id="username" type="hidden" value="'.$current_username.'"/>' ;
    }
}


// add_action('init', 'getPrices');
// function getPrices()
// {
//     $premiumVisio = wc_get_product('13299');
//     $smartVisio = wc_get_product('13298');

//     $premimumVisioRegularPrice =  wc_format_decimal($premiumVisio->get_regular_price(), 2);
//     $premiumVisioSalePrice =  wc_format_decimal($premiumVisio->get_sale_price(), 2);

//     $smartVisioRegularPrice = wc_format_decimal($smartVisio->get_regular_price(), 2);
//     $smartVisioSalePrice = wc_format_decimal($smartVisio->get_sale_price(), 2);
// }
