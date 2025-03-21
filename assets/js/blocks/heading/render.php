<?php
$block_id = $attributes['clientId'];
?>

<div <?php echo get_block_wrapper_attributes( array( 'class' => 'at-block-' . esc_attr( $block_id ) ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <h1><?php echo wp_kses_post( $attributes['content'] ); ?></h1>
</div>