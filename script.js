const heroName = document.getElementById("hero-name");
const heroLinks = document.getElementById("hero-links");
var nav = document.getElementById("nav");
var navBox = document.getElementById('box');

var serviceContentOne = document.getElementById('service--visual-and-branding');
var serviceContentTwo = document.getElementById('service--illustration');
var serviceContentThree = document.getElementById('service--front-end-dev');


console.log(serviceContentOne);
// Responsive Nav

function toggleNav(){
    var nav = document.getElementById("nav");
    var navBox = document.getElementById('box'); 
    console.log(nav.style.visibility);

    if(nav.style.display != 'block'){
        // nav.classList.add("animation-navfadedown");
        nav.style.display = 'block';
    }else{
        // nav.classList.add("animation-navfadeout");
        nav.style.display = 'none';
    };
};

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

//fade in links 

window.addEventListener('scroll', function(){
    if(isElementInViewPort(heroLinks)){
        heroLinks.style.visibility = "visible";
        heroLinks.classList.add("animation-fadeup-1s");
    }
});

//fade in services

window.addEventListener('scroll', function(){
    if(isElementInViewPort(serviceContentOne)){
        serviceContentOne.style.visibility = "visible";
        serviceContentOne.classList.add("animation-fadeup-1s");
    }
});

window.addEventListener('scroll', function(){
    if(isElementInViewPort(serviceContentTwo)){
        serviceContentTwo.style.visibility = "visible";
        serviceContentTwo.classList.add("animation-fadeup-1s");
    }
});

window.addEventListener('scroll', function(){
    if(isElementInViewPort(serviceContentThree)){
        serviceContentThree.style.visibility = "visible";
        serviceContentThree.classList.add("animation-fadeup-1s");
    }
});
