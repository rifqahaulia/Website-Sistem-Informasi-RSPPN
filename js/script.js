// Navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function () {
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// mengubah gambar ikon pencarian saat mengubah ukuran window
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function () {
            this.querySelector(".dropdown-menu").classList.toggle("show");
        });
    });
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', function () {
        let menu = this.querySelector('.dropdown-menu');
        menu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function () {
        let menu = this.querySelector('.dropdown-menu');
        menu.classList.remove('show');
    });
});


