
// grab details about an element 

function isElementInViewPort(e){
    let rect = e.getBoundingClientRect();
    console.log("the Bounding Rect of element is ", rect)
    //gets the height of the whole window.
    let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;

    let viewPortRight = window.innerWidth || document.documentElement.clientWidth;
    
    let isTopInViewPort = rect.top >= 0,
        isLeftInViewPort = rect.left >= 0,
        isBottomInViewPort = rect.bottom <= viewPortBottom,
        isRightInViewPort = rect.right <= viewPortRight;

return (isTopInViewPort && isLeftInViewPort && isBottomInViewPort && isRightInViewPort);
}

// Back to top button
const backToTopBtn = document.getElementById("back-to-top-btn");

function hideShowReturnToTop(){
    let value = window.scrollY;
    console.log(value, "scrollY");
    if(value >= 1000){
        backToTopBtn.style.visibility = 'visible'
    }
    else {
        backToTopBtn.style.visibility = 'hidden'
    }
}

window.addEventListener('scroll', function(){
    hideShowReturnToTop();
})