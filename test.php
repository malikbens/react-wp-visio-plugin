<?php 


function test()
{
    $current_user = wp_get_current_user();
    $current_username = $current_user->user_login;
    echo $current_username;
}
?>