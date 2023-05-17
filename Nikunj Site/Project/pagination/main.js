
const galleryItems =document.querySelector(".gallery-items").children;
const prev = document.querySelector(".prev");
// console.log(prev);
const next = document.querySelector(".next");
// console.log(next);
const page = document.querySelector(".page");
console.log(page);
const maxItem = 1;
let index = 1;
const pagination = Math.ceil(galleryItems.length/maxItem);
// console.log(galleryItems);
prev.addEventListener("click",function(){
if(index >= 1){
showItems();
check();
index--;
}
})
next.addEventListener("click",function(){
// index++;
if(index <= pagination){
showItems();
check();
index++;
}
})
function check(){
if(index == pagination){
next.classList.add("disabled");
}else{
next.classList.remove("disabled");
}
if(index == 1){
prev.classList.add("disabled");
}else{
prev.classList.remove("disabled");
}
}
function showItems(){
for(let i = 0; i < galleryItems.length; i++){
galleryItems[i].classList.remove("show");
galleryItems[i].classList.add("hide");
if(i >= (index * maxItem) - maxItem && i < index *
maxItem){
// if i greater than and equal to 
(index *maxItem) - maxItem;
// means(1 * 8) - 8 = 0 if index = 2 then (2 * 8)- 8 = 8;
galleryItems[i].classList.remove("hide");
galleryItems[i].classList.add("show");
}
page.innerHTML = index;
}
// console.log("ceee");
}
window.onload = showItems();