// Dropdown цэсийг нээх, хаах функц
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdown");

function toggleMenu() {
    const isVisible = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isVisible ? "none" : "block";
}

// Товчлуур дээр дарах үед
menuBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Цонхны даралт руу дамжуулахгүй
    toggleMenu();
});

// Гадна талд дарах үед цэсийг хаах
window.onclick = function (e) {
    if (!e.target.matches('.dropdown-btn')) {
        dropdownMenu.style.display = "none";
    }
}