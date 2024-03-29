const menu=document.querySelector(".menu");
const sidebar=document.querySelector(".sidebar");
const conatiner=document.querySelector(".container");

menu.onclick=function(){
    sidebar.classList.toggle("smallside-bar");
    conatiner.classList.toggle("large-conatiner")

}

