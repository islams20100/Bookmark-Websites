

/*
DOM
var img1  = document.getElementById("")
var imgs  = document.getElementsByClassName("img-item");//IE8
var h4s  = document.getElementsByTagName("h4");

var h4s  = document.getElementsByName("gender");
var h4s  = document.querySelectorAll(".container h1");//IE8
var h4s  = document.querySelector(".container .item");//IE8

element.style.anyCssProperty
element.style.cssText
element.innerHTML
element.classList

*/

// var imgs = document.querySelectorAll(".container img");//6 images

// for(var i=0 ; i<imgs.length ; i++)
// {
//     imgs[i].addEventListener("click" , sayHello);
// }

// function sayHello() {

//     window.alert("Hello");
//   }


// 1- element : img 
// 2- event : click
// 3- action : lightboxcontainer display flex


var imgs = Array.from(document.getElementsByClassName('img-item'));
var lightboxcontainer = document.getElementById('lightboxcontainer');
var lightboxitem = document.getElementById('lightboxitem');
var closeIcon = document.getElementById('close');
var nextIcon = document.getElementById('next');
var prevIcon = document.getElementById('prev');
var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', openLightBox);
}
//open current image
function openLightBox(e) {
    lightboxcontainer.style.display = 'flex';
    imgSrc = e.target.src;
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
    currentIndex = imgs.indexOf(e.target);
    console.log(currentIndex);
}

//close icon
closeIcon.addEventListener('click', close);
function close() {
    lightboxcontainer.style.display = 'none';
}

//nextIcon
nextIcon.addEventListener('click', nextImage);
function nextImage() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].src;
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
}

//prevIcon
prevIcon.addEventListener('click', prevImage);
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].src;
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
}


//keydown
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        nextImage();
    } else if (e.keyCode == 37) {
        prevImage();
    } else if (e.keyCode == 27) {
        close();
    }
});