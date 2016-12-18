/* Closes any open popups on the page. In this context, a pop is something that
 * is opened with a button and is toggle-able. Frequently seen with menus.*/
function closePopups(){

	document.querySelectorAll( `[aria-expanded="true"]` ).forEach(( button, index ) => {
		button.click();
	});
}

document.addEventListener( "DOMContentLoaded", function(){

	// popup code
	document.querySelectorAll( `[aria-haspopup="menu"]` ).forEach(( button, index ) => {

		button.addEventListener( "click", function( e ){

			popup = document.getElementById( this.getAttribute( "aria-controls" ));
			popup.toggleAttribute( "aria-hidden" );

			if ( this.getAttribute( "aria-expanded" ) == "false" ){
				closePopups();
				this.setAttribute( "aria-expanded", "true" );
			}else{
				this.setAttribute( "aria-expanded", "false" );
			}

			e.stopPropagation();
		});
	});

	// close popups when the body is clicked
	document.addEventListener( "click", function(){ closePopups(); });
});
