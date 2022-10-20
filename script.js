const title = document.getElementById("intro-name");

window.addEventListener('scroll', function(){
    var value = window.scrollY
    
    title.style.top = value * .6 + 'px';

    isElementInViewPort
})


// function isElementInViewPort(element){
//         let rect = element.getBoundingClientRect();
//         console.log("the Bounding Rect of element is ", rect)
//         //gets the height of the whole window.
//         let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;

//         let viewPortRight = window.innerWidth || document.documentElement.clientWidth;
        
//         let isTopInViewPort = rect.top >= 0,
//             isLeftInViewPort = rect.left >= 0,
//             isBottomInViewPort = rect.bottom <= viewPortBottom,
//             isRightInViewPort = rect.right <= viewPortRight;
        
//     return (isTopInViewPort && isLeftInViewPort && isBottomInViewPort && isRightInViewPort);
// }
// let topEle = document.getElementById('intro-name');
//     console.log("is top element visible: ", isElementInViewPort(topEle));

// let bottomEle = document.getElementById('links');
//     console.log("is bottom element visible ", isElementInViewPort(bottomEle));

// console.log(isElementInViewPort(topEle));

// while (isElementInViewPort){
//     console.log("the element is visible!");
// };

  