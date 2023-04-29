const menuBtn =document.querySelector(".header__menu__btn");
const sidebar =document.querySelector(".sidebar");



menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
})
console.log(menuBtn);