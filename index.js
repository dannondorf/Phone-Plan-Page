const months = document.querySelector(".monthly--on").classList;
const years = document.querySelector(".yearly--off").classList;
const mButton = document.getElementById("month-button");
const yButton = document.getElementById("year-button");
const professional = document.getElementById("professional");
const burger = document.querySelector(".hamburger")
const elite = document.getElementById("elite");
const navMenu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".menu-items");
const closedBurger = document.getElementById("open");
const openBurger = document.getElementById("close");


burger.onclick = () => {
   if (closedBurger.classList.contains("show")) {
       menuItems.forEach(item => {
           item.style.display = "flex";
       });
       navMenu.style.backgroundColor = "#FFF";
       closedBurger.classList.replace("show", "hide");
       openBurger.classList.replace("hide", "show");
    } else {
       menuItems.forEach(item => {
           item.removeAttribute("style");
       });
       navMenu.style.backgroundColor = "transparent";
       closedBurger.classList.replace("hide", "show");
       openBurger.classList.replace("show", "hide");
    }
};

    
yButton.onclick = () => {
    if (years.contains("yearly--off")) {
        months.replace("monthly--on", "monthly--off");
        years.replace("yearly--off", "yearly--on");
        professional.innerHTML = "$75/YEAR";
        elite.innerHTML = "$150/YEAR";
    }
};

mButton.onclick = () => {
    if (months.contains("monthly--off")) {
        months.replace("monthly--off", "monthly--on");
        years.replace("yearly--on", "yearly--off");
        professional.innerHTML = "$7/MONTH";
        elite.innerHTML = "$14/MONTH";
    }
};


var $links = $('a').click(function () {
   $('a').removeClass('clicked');
   $(this).addClass('clicked');
});




