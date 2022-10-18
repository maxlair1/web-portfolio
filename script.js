const title = document.getElementById("intro-name");

window.addEventListener('scroll', function(){
    var value = window.scrollY

    console.log(value);
    
    title.style.top = value * .6 + 'px';
})




  