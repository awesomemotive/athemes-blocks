/**
 * aThemes Blocks pagination.
 * 
 */

'use strict';

var athemesBlocks = athemesBlocks || {};

athemesBlocks.pagination = {

	// Defaults.
	defaults: {
		button: document.querySelector( '.at-pagination__button' ),
        buttonText: document.querySelector( '.at-pagination__button' ).innerHTML,
		pagination: document.querySelector( '.at-pagination' ),
		next: document.querySelector( '.at-pagination .next' ),
		paginationListSelector: 'ul.page-numbers',
		paginationListItemsSelector: 'li',
		itemsWrapper: document.querySelector( '.at-block-post-grid__items' ),
		itemsTag: 'div',
		items: '.at-block-post-grid__items .at-block-post-grid__item',
		currentPage: 1,
		totalPages: document.querySelector( '.at-pagination__button' ) !== null ? parseInt( document.querySelector( '.at-pagination__button' ).getAttribute( 'data-total-pages' ) ) : 0,
		infiniteScroll: document.querySelector( '.at-pagination__button' ) !== null && document.querySelector( '.at-pagination__button' ).getAttribute( 'data-pagination-type' ) === 'infinite-scroll' ? true : false,
		eventPrefix: 'athemesblocks.postgrid',
		triggerOffset: 200
	},

	/**
	 * Ensures DOM is ready before executing a function.
     * To ensure better compatibility with plugins like WP Rocket that has
     * options to defer/lazy-load JS files, each JS script should have your own 
     * 'domReady' function. This way the script has no dependecies and can be loaded standalone.
     * 
	 * @param {Function} fn - The function to execute when DOM is ready
     * @returns {void}
	 */
	domReady: function( fn ) {
		if ( typeof fn !== 'function' ) {
			return;
		}
	
		if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
			return fn();
		}
	
		document.addEventListener( 'DOMContentLoaded', fn, false );
	},

	/**
	 * Initializes the pagination functionality.
	 * Sets up event listeners and initializes infinite scroll if enabled.
     * 
     * @returns {void}
	 */
	init: function() {
		if ( typeof this.defaults.button === 'undefined' ) {
			return false;
		}

		if ( null === this.defaults.pagination ) {
			return false;
		}
		const paginationList = this.defaults.pagination.querySelector( this.defaults.paginationListSelector );
		const paginationListItems = paginationList.querySelectorAll( this.defaults.paginationListItemsSelector );
		const beforeLastListItem = paginationListItems[ paginationListItems.length - 2 ];
		const beforeLastListItemText = beforeLastListItem.tagName === 'LI' ? beforeLastListItem.querySelector( 'a' ).textContent : beforeLastListItem.textContent;
		const total_pages = this.stringIsNumber( beforeLastListItemText ) ? beforeLastListItemText : this.extractNumberFromString( beforeLastListItemText );

		this.defaults.totalPages = total_pages !== null ? parseInt( total_pages ) : this.defaults.totalPages;

		const _this   = this,
			is_mobile = matchMedia( 'screen and (max-width: 767px)' ).matches ? true : false;

		this.ename = is_mobile ? 'touchend' : 'click';

		this.defaults.button.addEventListener( 'click', this.loadMoreButtonEventHandler.bind( this ) );
		this.defaults.button.addEventListener( 'touchend', this.loadMoreButtonEventHandler.bind( this ) );
		
		// Infinite Scroll
		if ( this.defaults.infiniteScroll ) {
			this.infiniteScroll();

			// Check if the button it's on view in the first load of the page
			if ( this.isAlmostInViewport( this.defaults.button ) ) {
				this.defaults.button.dispatchEvent( new Event( this.ename ) );
			}
		}

		window.dispatchEvent( new Event( _this.defaults.eventPrefix + '.pagination.initialized' ) );
	},

	/**
	 * Checks if a string is a valid number.
     * 
	 * @param {string} str - The string to check
	 * @returns {boolean} True if the string is a valid number
	 */
	stringIsNumber: function( str ) {
		return ! isNaN( str ) && ! isNaN( parseFloat( str ) );
	},

	/**
	 * Extracts a number from a string using regex.
     * 
	 * @param {string} str - The string to extract number from
     * 
	 * @returns {string|null} The extracted number or null if no number found
	 */
	extractNumberFromString: function(str) {
		// Use regular expression to find the number in the string
		const match = str.match(/-?\d+(\.\d+)?/);
	
		// If a match is found, return it; otherwise, return null
		return match ? match[0] : null;
	},

	/**
	 * Handles the load more button click event.
     * Shows loading state and triggers post loading.
     * 
	 * @param {Event} e - The click event object
     * 
     * @returns {void}
	 */
	loadMoreButtonEventHandler: function(e) {
		e.preventDefault();

		if ( ! this.defaults.button.classList.contains( 'loading' ) ) {
			this.loadMorePosts( this.defaults );
		}

		this.defaults.button.classList.add( 'loading' );

        const buttonHeight = this.defaults.button.offsetHeight;
        const buttonWidth = this.defaults.button.offsetWidth;

        this.defaults.button.style.width = buttonWidth + 'px';
        this.defaults.button.style.height = buttonHeight + 'px';

        this.defaults.button.innerHTML = '<div class="atb-spinner-loader"></div>';
	},

	/**
	 * Loads more posts via AJAX.
     * Handles masonry layout if enabled.
     * Updates pagination state and triggers necessary events.
     * 
     * @returns {void}
	 */
	loadMorePosts: function() {
		if ( this.defaults.currentPage >= this.defaults.totalPages ) {
			return false;
		}
		
		const _this = this,
			ajax    = new XMLHttpRequest(),
			nextURL = this.defaults.next.getAttribute( 'href' );

		ajax.open('GET', nextURL, true);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		ajax.onload = function() {
			if (this.status >= 200 && this.status < 400) {
				const html     = document.createElement( 'html' );
				html.innerHTML = this.responseText;

				// Masonry
				const 
					is_masonry_layout = typeof Masonry === 'function' && _this.defaults.itemsWrapper.classList.contains( 'masonry-brick' ),
					msnry             = is_masonry_layout ? Masonry.data( _this.defaults.itemsWrapper.parentElement ) : '';

				const
					is_shop_masonry_layout  = typeof Masonry === 'function' && _this.defaults.itemsWrapper.classList.contains( 'masonry' ),
					shop_masonry_first_item = is_shop_masonry_layout ? _this.defaults.itemsWrapper.querySelector( _this.defaults.items ) : '',
					shop_msnry              = is_shop_masonry_layout ? Masonry.data( _this.defaults.itemsWrapper ) : '';

				const items = html.querySelectorAll( _this.defaults.items );
				for ( let i=0;i<items.length;i++ ) {
					const list_item = document.createElement( _this.defaults.itemsTag );

					list_item.setAttribute( 'class', items[i].classList.value );
					
					if ( ! is_masonry_layout && ! is_shop_masonry_layout ) {
						list_item.classList.add( 'atb-animation-slide-in' );
						list_item.setAttribute( 'style', 'animation-delay: ' + ( i * 200 ) + 'ms;' );
					}
					
					list_item.innerHTML = items[i].innerHTML;

					_this.defaults.itemsWrapper.append( list_item );

					if ( is_masonry_layout ) {
					
						msnry.appended( list_item );
						msnry.layout();
					
					} else if ( is_shop_masonry_layout ) {

						list_item.style.width        = shop_masonry_first_item.style.width;
						list_item.style.marginBottom = shop_masonry_first_item.style.marginBottom;

						shop_msnry.appended( list_item );
						shop_msnry.layout();
					
					}
				
				}

				_this.defaults.button.classList.remove( 'loading' );

				_this.maybeInitExtraFeatures();

				_this.updateNextURL();

				// Infinite Scroll
				if ( _this.defaults.infiniteScroll && _this.isAlmostInViewport( _this.defaults.button ) ) {
					_this.defaults.button.dispatchEvent( new Event( 'click' ) );
				}

                _this.removeSpinnerLoader();

				_this.hideButton();

				window.dispatchEvent( new CustomEvent( _this.defaults.eventPrefix + '.pagination.items.added', {
					detail: {
						itemsAdded: items
					}
				} ) );
			}
		};

		ajax.send();
	},

	/**
	 * Removes the spinner loader and restores button state.
     * 
     * @returns {void}
	 */
	removeSpinnerLoader: function() {
		this.defaults.button.querySelector( '.atb-spinner-loader' ).remove();
        this.defaults.button.style.width = '';
        this.defaults.button.style.height = '';
        this.defaults.button.innerHTML = this.defaults.buttonText;
	},

	/**
	 * Updates the next page URL for pagination.
     * Handles different URL formats (page, paged, comment-page, etc.).
     * 
     * @returns {void}
	 */
	updateNextURL: function() {
		let
			nextPage = this.defaults.currentPage < this.defaults.totalPages ? this.defaults.currentPage + 1 : this.defaults.currentPage,
			nextURL  = this.defaults.next.getAttribute( 'href' ).replace( '/page/' + nextPage, '/page/' + ( nextPage + 1 ) );

		if ( this.defaults.next.getAttribute( 'href' ).indexOf( 'paged=' ) > 0 ) {
			nextURL = this.defaults.next.getAttribute( 'href' ).replace( 'paged=' + nextPage, 'paged=' + ( nextPage + 1 ) );
		} else if ( this.defaults.next.getAttribute( 'href' ).indexOf( '/comment-page-' ) > 0 ) {
			nextURL = this.defaults.next.getAttribute( 'href' ).replace( '/comment-page-' + nextPage, '/comment-page-' + ( nextPage + 1 ) );
		} else if ( this.defaults.next.getAttribute( 'href' ).indexOf( 'cpage=' ) > 0 ) {
			nextURL = this.defaults.next.getAttribute( 'href' ).replace( 'cpage=' + nextPage, 'cpage=' + ( nextPage + 1 ) );
		} else if ( this.defaults.next.getAttribute( 'href' ).indexOf( 'product-page=' ) > 0 ) {
			nextURL = this.defaults.next.getAttribute( 'href' ).replace( 'product-page=' + nextPage, 'product-page=' + ( nextPage + 1 ) );
		}

		this.defaults.currentPage++; 

		this.defaults.next.setAttribute( 'href', nextURL );
	},

	/**
	 * Hides the load more button when all pages are loaded.
     * 
     * @returns {void}
	 */
	hideButton: function() {
		if ( this.defaults.currentPage >= this.defaults.totalPages ) {
			this.defaults.button.remove();
		}
	},

	/**
	 * Sets up infinite scroll functionality.
     * Triggers load more when button is near viewport.
     * 
     * @returns {void}
	 */
	infiniteScroll: function() {
		const _this = this;

		window.addEventListener( 'scroll', function(){
			if ( _this.isAlmostInViewport( _this.defaults.button ) ) {
				_this.defaults.button.dispatchEvent( new Event( _this.ename ) );
			}
		} );

	},

	/**
	 * Initializes additional features for newly loaded content.
     * Handles quick view, wishlist, quantity inputs, and share buttons.
     * 
     * @returns {void}
	 */
	maybeInitExtraFeatures: function() {

		// AddToAny Share Buttons
		if ( typeof a2a !== 'undefined' ) {
			a2a.init_all();
		}

	},

	/**
	 * Checks if an element is near the viewport.
     * 
	 * @param {HTMLElement} el - The element to check
     * 
	 * @returns {boolean} True if element is near viewport
	 */
	isAlmostInViewport: function( el ) {
		const rect = el.getBoundingClientRect();
		return (
			( rect.bottom - this.defaults.triggerOffset ) <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}
}

athemesBlocks.pagination.domReady( setTimeout(function(){ athemesBlocks.pagination.init() }, 100) );
