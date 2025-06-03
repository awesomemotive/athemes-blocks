'use strict';

(function($){
    $(document).on('click', '.atb-ajax-add-to-cart', function(e){
        e.preventDefault();

        const $this = $(this);
        const productId = $this.data('product-id');
        const productType = $this.data('product-type');

        if (productType === 'simple') {
            const quantity = $this.data('quantity') || 1;

            $this.addClass('loading');

            $.ajax({
                url: wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'),
                type: 'POST',
                data: {
                    product_id: productId,
                    quantity: quantity,
                },
                success: function(response) {
                    if (response.error && response.product_url) {
                        window.location = response.product_url;
                        return;
                    }
                    
                    // Trigger event for other scripts
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $this]);
                },
                error: function() {
                    window.location = $this.attr('href');
                },
                complete: function() {
                    $this.removeClass('loading');
                }
            });
        }
    });
})(jQuery);