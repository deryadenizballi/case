const menuBtn =document.querySelector(".header__menu__btn");
const sidebar =document.querySelector(".sidebar");


// Sidebar 
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
})

// Slider 
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Slider tab 
  function openCity(phoneName) {
    var i;
    var x = document.getElementsByClassName("phone");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(phoneName).style.display = "block";
  }