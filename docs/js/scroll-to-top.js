/** Scroll to top implementation in plain JavaScript **/

/**
 * We add an event listener to the "document" which will execute the function below
 * when the browser event "DOMContentLoaded" is fired.
 * The DOMContentLoaded event fires when the html document has been loaded and parsed, 
 * but before any stylesheets or images are finished loading.
*/

document.addEventListener("DOMContentLoaded", function() {
    
// Let's define our variables first
    
    // Scroll button
    var scrollButton = document.getElementById( "scroll" );

    // Duration and amount of steps of scroll animation
    var scrollHeight = 50; // 50px step scrolling
    
    // ID of the currently active animation interval. We need this to cancel the animation later.
    var intervalId = 0;
    
    // Duration of one scroll step (= interval). 
    // Change this value and see what happens!
    var intervalDuration = 10;

// Let's start building our functions

    //------todo: add description
    function scrollToTop() {
        intervalId = setInterval( scrollStep, intervalDuration );
    }

    // Function for scrolling up one step
    function scrollStep() {
        // Check whether the window has scrolled to the top.
        // If so, call scrollStop() to clear the interval and write to the console.
        if( window.scrollY === 0 ) {
            console.log("Scroll to top"); // We tell the console to display this text in order to test our boolean function
            scrollStop();
        }
        // Call the function window.scroll(x, y) and 
        window.scroll( 0, window.scrollY-50 ); 
    }

    // End the animation by clearing the timer interval
    function scrollStop() {
        clearInterval( intervalId );
    }
    
    /**
     * Add a click event listener to the scroll button
     * which will trigger the scrollToTop() function 
     **/
    scrollButton.addEventListener( "click", function() {
        scrollToTop();
    });

    /**
     *  We assign a function to the window.onscroll Event.
     *  The function checks whether the property window.scrollY 
     *  ( = how far we have scrolled down from the top) is greater than 100px.
     *  If this is the case we add the class "is-full-opacity" to our scroll button.
     *  This class will ensure that the button is visible by setting its opacity to 40%.
     *  If window.scrollY returns a value below 100 we remove the class again, so that
     *  the button becomes invisible again (since its opacity is set to 0).
     **/
    window.onscroll = function() {
        if( window.scrollY > 100 ) {
            // Make scroll button visible
            scrollButton.classList.add("is-full-opacity");
        } else { 
            // Make scroll button invisible
            scrollButton.classList.remove("is-full-opacity");
        }
    }
});