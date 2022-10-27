
// Home text slow scroll

const title = document.getElementById("intro-name");

window.addEventListener('scroll', function(){
    var value = window.scrollY
    
    title.style.top = value * .6 + 'px';
});