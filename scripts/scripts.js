/* MODUSversus
 * scripts.js - main scripts
 * started at 17/11/2015
 */

( function() {

    "use strict";

    var fToggleSearchForm;

    fToggleSearchForm = function() {
        var $form = document.querySelector( ".search-form" );

        if ( $form.className === "search-form" ) {
            $form.className += " search-form--js-is-open";
            document.querySelector( ".search-form__input" ).focus();
        } else {
            $form.className = "search-form";
        }
    };

    window.addEventListener( "load", function() {
        document.querySelector( ".search-form__toggle" ).addEventListener( "click", fToggleSearchForm );
    } );

} )();
