const input = document.querySelector(".buscador__container--ipt");
const container = document.querySelector(".buscador__container");
const body = document.querySelector("body");
/* input.addEventListener('click', function(){
   
   container.classList.add('active');
 
}); */

body.addEventListener('click', function(event){
   verifyClick(event.target);
});

function verifyClick(value) {
    if(value == input){
        container.classList.add('active');
    }else {
        container.classList.remove('active');
    }
}


