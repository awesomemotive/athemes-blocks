<?php
$block_id = $attributes['clientId'];
?>

<div <?php echo get_block_wrapper_attributes( array( 'class' => 'wp-block-athemes-blocks-heading-' . esc_attr( $block_id ) ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <h1><?php echo esc_html( $attributes['content'] ); ?></h1>
</div>