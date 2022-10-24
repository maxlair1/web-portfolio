
// Home text slow scroll

const title = document.getElementById("intro-name");

window.addEventListener('scroll', function(){
    var value = window.scrollY
    
    title.style.top = value * .6 + 'px';

    isElementInViewPort
});

// extend-o-nav

// function menuExpand() {
//     var nav = document.getElementsByClassName("nav");

//     Array.from(nav).forEach((x) => {
//     if (nav.style.display === "none") {
//       nav.style.display = "block";
//     } else {
//       nav.style.display = "block";
//     }
//     })
//     console.log("yeet");
// }


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
let topEle = document.getElementById('intro-name');
    console.log("is top element visible: ", isElementInViewPort(topEle));

let bottomEle = document.getElementById('links');
    console.log("is bottom element visible ", isElementInViewPort(bottomEle));

console.log(isElementInViewPort(topEle));
  