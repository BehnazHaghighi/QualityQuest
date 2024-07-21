document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("btnHamburgerMenu");
  var sideNav = document.getElementById("sideNav");
  var content = document.getElementById("content");
  var closeBtn = document.getElementById("closeBtn");

  function openNav() {
    sideNav.style.left = "0px";
    content.style.marginLeft = "250px";
    hamburger.style.display = "none";
  }

  function closeNav() {
    sideNav.style.left = "-250px";
    content.style.marginLeft = "0";
    hamburger.style.display = "block";
  }

  hamburger.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);

  // Window resize event
  window.addEventListener("resize", function () {
    if (window.innerWidth > 980) {
      // Reset sidebar and hamburger menu for larger screens
      sideNav.style.left = "0";
      content.style.marginLeft = "0px";
      hamburger.style.display = "none";
    } else {
      // Adjust for smaller screens
      closeNav(); // This will ensure the sidebar is closed and the hamburger menu is shown
    }
  });
});
