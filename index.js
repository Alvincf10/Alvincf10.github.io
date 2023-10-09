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

jQuery(document).ready(function ($) {
    var mastheadheight = $(".navbar-custom").outerHeight();
    //console.log(mastheadheight);
    $(".banner,.ds-main-section").css("margin-top", mastheadheight);
  
    $(window)
      .scroll(function () {
        if ($(window).scrollTop() >= 10) {
          $(".navbar-custom").addClass("fixed-navbar");
        } else {
          $(".navbar-custom").removeClass("fixed-navbar");
        }
      })
      .scroll();
  });