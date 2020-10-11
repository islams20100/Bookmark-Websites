//1st way to call function
// document.addEventListener('click', function (e) {
//     printPost(e);
// });

//2nd way to call function
// document.addEventListener('click', printPost);


// function printPost(e) {
//     console.log(e.clientX);
// }



var obj = document.getElementById('img-info');

document.addEventListener('mousemove', function (e) {
    obj.style.left = e.clientX;
    obj.style.top = e.clientY;
});