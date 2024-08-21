function handleSidebarVisibility() {
    var sidebarMenu = document.getElementById('sidebarMenu');
    var windowWidth = window.innerWidth;

   
    if (windowWidth >= 992) {
        sidebarMenu.classList.add('show');
    } else {
     
        sidebarMenu.classList.remove('show');
    }
}


handleSidebarVisibility();


window.addEventListener('resize', function () {
    handleSidebarVisibility();
});