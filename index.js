const popupTrigger = document.getElementById("popup-trigger");
const popup = document.getElementById("popup");
const popupCloseButton = document.getElementById("popup-close");

// Menampilkan popup
popupTrigger.addEventListener("click", () => {
    popup.style.display = "block";
});

// Menyembunyikan popup
popupCloseButton.addEventListener("click", () => {
    popup.style.display = "none";
});