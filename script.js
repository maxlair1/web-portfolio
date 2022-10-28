
// Home text slow scroll

const title = document.getElementById("hero-name");

window.addEventListener('scroll', function(){
    var value = window.scrollY
    
    title.style.top = value * .6 + 'px';
});

// grab details about an element 

function isElementInViewPort(element){
    let rect = element.getBoundingClientRect();
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

var heroLinks = document.getElementById("hero-links");

function onLoadfadeUp(element){
    isElementInViewPort(element)
    if(isTopInViewPort = true){
        element.classList.add('MyClass');
    } else {

    }

}