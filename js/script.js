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


// Data Dummy 
const articles = [
    { title: "Perawatan Medis Dasar", tags: ["medical care", "nurse"] },
    { title: "Tindakan Darurat di IGD", tags: ["emergency", "surgery"] },
    { title: "Terapi Pasca Operasi", tags: ["therapy", "medication"] },
    { title: "Penanganan Cedera Serius", tags: ["surgery", "medical care"] }
];

// Pastikan elemen ada sebelum menambahkan event listener
document.addEventListener("DOMContentLoaded", function () {
    const tagListItems = document.querySelectorAll('.tags-list li');
    const resultContainer = document.getElementById('searchResults');

    if (!resultContainer) {
        console.error("Elemen #searchResults tidak ditemukan di HTML.");
        return;
    }

    // Event Listener untuk Klik Tag
    tagListItems.forEach(tag => {
        tag.addEventListener('click', function () {
            let selectedTag = this.dataset.tag.trim().toLowerCase();
            console.log("Tag diklik:", selectedTag); // Debugging
            searchByTag(selectedTag);
        });
    });
});


