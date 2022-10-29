const heroName = document.getElementById("hero-name");
const heroLinks = document.getElementById("hero-links");
const nav = document.getElementById("nav");
const navBox = document.getElementById('box');
const navX= document.getElementById('x-box');

// Home text slow scroll


window.addEventListener('scroll', function(){
    var value = window.scrollY
    
    heroName.style.top = value * .6 + 'px';
});

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

window.addEventListener('scroll', function(){
    if(isElementInViewPort(heroLinks)){
        heroLinks.style.visibility = "visible";
        heroLinks.classList.add("animation-fadeup");
    }
});

// Responsive Nav

function navClick(){
    console.log('function is working')
    if(nav.style.visibility == 'hidden'){
        nav.style.visibility = 'visible';
        window.overflowY = 'hidden';
        navBox.style.visbility = 'hidden';
        navX.style.visibility = 'visible';
    };
};