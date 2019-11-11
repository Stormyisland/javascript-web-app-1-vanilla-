


let colorBtn = document.querySelector('.color-btn');
let bodyBcg = document.querySelector('body');

let colors = ['yellow','red','green','#3b5998'];


colorBtn.addEventListener('click', changeColor);

function changeColor(){
    let random = Math.floor(Math.random() *colors.length)
  bodyBcg.style.backgroundColor = colors[random];
}