const backToTopBtn = document.getElementById("back-to-top-btn");
var nav = document.getElementById("nav");
var navBox = document.getElementById('box')

// Responsive Nav

function toggleNav(){
    var nav = document.getElementById("nav");
    var navBox = document.getElementById('box'); 
    console.log(nav.style.visibility);

    if(nav.style.display != 'block'){
        // nav.style.classList.add(".animation-fadedown");
        nav.style.display = 'block';
    }else{
        nav.style.display = 'none';
        ;
    };
};

// grab details about an element 

function isElementInViewPort(element){
    let rect = element.getBoundingClientRect();
    // console.log("the Bounding Rect of element is ", rect)
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

function hideShowReturnToTop(){
    let value = window.scrollY;
    console.log(value, "scrollY");
    if(value >= 1000){
        backToTopBtn.style.visibility = 'visible'
        backToTopBtn.classList.add("animation-fadeup");
    }
    else {
        backToTopBtn.classList.remove("animation-fadeup");
        backToTopBtn.style.visibility = 'hidden'
    }
}

window.addEventListener('scroll', function(){
    hideShowReturnToTop();
})
