<?php
/**
 * Ohio WordPress Theme
 *
 * Archive layout template
 *
 * @author Colabrio
 * @link   https://ohio.clbthemes.com
 */

defined( 'ABSPATH' ) || exit;

global $product, $post;
$product_id = $product->get_id();

// Get theme options
$quickview_btn = OhioOptions::get_global( 'woocommerce_quickview_button', true );
$show_price = OhioOptions::get_global( 'woocommerce_shop_price_visibility', true );
$show_category = OhioOptions::get_global( 'woocommerce_shop_category_visibility', true );
$show_rating = OhioOptions::get_global( 'woocommerce_shop_rating_visibility', false );
$use_boxed_layout = OhioOptions::get_global( 'product_items_boxed_style', false );
$photos_count = OhioOptions::get_global( 'woocommerce_product_images_count', 2 );
$hover_effect = OhioOptions::get_global( 'shop_item_hover_type', 'none' );
$ajax_cart = OhioOptions::get( 'woocommerce_product_ajax_cart', true );

$parallax_data = '';
$tilt_effect = OhioOptions::get_global( 'shop_tilt_effect', true );
$tilt_perspective = OhioOptions::get( 'shop_tilt_effect_perspective', 6000 );

if ( $tilt_effect ) {
	$parallax_data = 'data-tilt=true data-tilt-perspective=' . $tilt_perspective . '';
}

$in_wishlist = false;
if ( function_exists( 'YITH_WCWL' ) ) {
	$in_wishlist = YITH_WCWL()->is_product_in_wishlist( $product_id );
}

?>

<div class="product-item-thumbnail">

	<?php if ( $quickview_btn || is_null( $quickview_btn ) ) : ?>

		<button aria-label="Open the quickview" class="icon-button button-quickview -fade-down -top -reset-color" data-product-id="<?php echo esc_attr( $product->get_id()) ?>">
		    <i class="icon">
		    	<svg class="default" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z"></path></svg>
		    </i>
		</button>

	<?php endif; ?>

	<?php if ( function_exists( 'YITH_WCWL' ) ) : ?>

		<div class="button-favorites -fade-down">

			<?php echo do_shortcode( '[yith_wcwl_add_to_wishlist]' ); ?>

			<a href="/?add_to_wishlist=<?php echo esc_attr( $product_id ); ?>" data-product-id="<?php echo esc_attr( $product_id ); ?>" aria-label="favorites" class="icon-button add_to_wishlist single_add_to_wishlist btn-wishlist<?php if ( $in_wishlist ) { echo esc_attr(' active'); } ?>">
		    	<i class="icon">
			    	<svg class="default" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0C12.76 0 11.09 0.794551 10 2.05014C8.91 0.794551 7.24 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 9.103 3.4 12.1243 8.55 16.715L10 18L11.45 16.7052C16.6 12.1243 20 9.103 20 5.3951C20 2.37384 17.58 0 14.5 0ZM10.1 15.2534L10 15.3515L9.9 15.2534C5.14 11.0256 2 8.22997 2 5.3951C2 3.43324 3.5 1.96185 5.5 1.96185C7.04 1.96185 8.54 2.93297 9.07 4.27684H10.94C11.46 2.93297 12.96 1.96185 14.5 1.96185C16.5 1.96185 18 3.43324 18 5.3951C18 8.22997 14.86 11.0256 10.1 15.2534Z"></path></svg>
			    	<svg class="-hidden" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0C12.76 0 11.09 0.794551 10 2.05014C8.91 0.794551 7.24 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 9.103 3.4 12.1243 8.55 16.715L10 18L11.45 16.7052C16.6 12.1243 20 9.103 20 5.3951C20 2.37384 17.58 0 14.5 0Z"/></svg>
			    </i>
			</a>
		</div>

	<?php endif; ?>

	<?php woocommerce_show_product_loop_sale_flash(); ?>

	<div data-cursor-class="cursor-link" <?php if ( ! $use_boxed_layout ) { echo esc_attr( $parallax_data ); } ?>>
		<div class="image-holder">

		<?php if ( $hover_effect != 'transition' ) : ?>
			<div class="slider -woo-slider">
		<?php endif; ?>

			<?php echo woocommerce_get_product_thumbnail(); ?>
			<?php
				$attachment_ids = $product->get_gallery_image_ids();
	            $i = 1;
	            foreach ( $attachment_ids as $attachment_id ) {
	                $i++;
	                if ( $i > $photos_count ) {
	                    break;
                	} ?>
					<?php echo wp_get_attachment_image( $attachment_id, 'woocommerce_thumbnail' ); ?>
					<?php
				}
			?>

		<?php if ( $hover_effect != 'transition' ) : ?>
			</div>
		<?php endif; ?>

		<a href="<?php echo esc_url( get_post_permalink() ); ?>"></a>

		</div>
	</div>
</div>

<?php
/**
* woocommerce_after_shop_loop_item hook.
*
* @hooked woocommerce_template_loop_product_link_close - 5
* @hooked woocommerce_template_loop_add_to_cart - 10
*/
?>
<div class="card-details">

	<h5 class="woo-product-name title">
		<a href="<?php echo esc_url( get_post_permalink() ); ?>" class="color-dark -undash">
			<?php echo esc_attr( get_post( $product->get_id() )->post_title ); ?>
		</a>
	</h5>

	<?php if ( $show_category ) : ?>

		<div class="woo-category category-holder">

		<?php
			$categories = explode(', ', wc_get_product_category_list( $product->get_id() ) );
			$categories = array_filter( $categories );
			$i = 0;
			if ( !empty( $categories ) ) :
				foreach ( $categories as $category ):
		?>
		<?php echo preg_replace('/(<a)(.+\/a>)/i', '${1} class="category" ${2}', $category ); ?>
		<?php
				endforeach;
			endif;
		?>
		</div>

	<?php endif; ?>

	<div class="holder">

		<?php if ( $show_price ) : ?>

			<div class="woo-price<?php if ( $show_rating ) { echo esc_attr( ' -with-rating' ); } ?>">

				<?php  
					/**
					 * Hook: woocommerce_after_shop_loop_item_title.
					 *
					 * @hooked woocommerce_template_loop_rating - 5
					 * @hooked woocommerce_template_loop_price - 10
					 */
					do_action( 'woocommerce_after_shop_loop_item_title' );

				?>

			</div>

		<?php endif; ?>

		<div aria-label="add-to-cart">
			<div class="button-group">

				<?php if ( ! $ajax_cart ) : ?>
                  
					<?php
						/**
						 * Hook: woocommerce_after_shop_loop_item.
						 *
						 * @hooked woocommerce_template_loop_product_link_close - 5
						 * @hooked woocommerce_template_loop_add_to_cart - 10
						 */
						do_action( 'woocommerce_after_shop_loop_item' );
					?>

		        <?php else: ?>
				
					<?php
						$classes = '';
						if ( ! $product->managing_stock() && ! $product->is_in_stock() )
						$classes = 'out-of-stock';
						echo apply_filters( 'woocommerce_loop_add_to_cart_link',
						sprintf( '<a href="%s" rel="nofollow" data-product_id="%s" data-product_sku="%s" class="%s product_type_%s single_add_to_cart_button data_button_ajax button -text %s" data-button-loading="true">%s</a>',
						esc_url( $product->add_to_cart_url() ),
						esc_attr( $product->get_id() ),
						esc_attr( $product->get_sku() ),
						$product->is_purchasable() ? 'add_to_cart_button' : '',
						esc_attr( $product->get_type() ),
						$classes,
						esc_html( $product->add_to_cart_text() )
					),
					$product );
					?>

					<input type="hidden" name="add-to-cart" value="<?php echo absint( $product->get_id() ); ?>" />
					<input type="hidden" name="product_id" value="<?php echo absint( $product->get_id() ); ?>" />
					<input type="hidden" name="variation_id" class="variation_id" value="0" />

				<?php endif; ?>

			</div>
		</div>
	</div>
</div>