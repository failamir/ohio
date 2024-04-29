jQuery( window ).on('elementor/frontend/init', () => {
    if (elementorFrontend.isEditMode()) {
        elementorFrontend.hooks.addAction('frontend/element_ready/ohio_progress_bar.default', ( $element ) => {
            jQuery(window).trigger('ohio:handle_progress_bar');
        });
    }
});