var header = document.getElementById('header');
// var menuBar = document.getElementsByClassName("menu-bar");
var menuBar = document.getElementById('menu');

var headerHeight = header.clientHeight;
console.log(menuBar);

menuBar.onclick = function() {
    // alert('Gor');\
    // console.log(header.clientHeight);
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('.nav li a[href*="#"]');
// var menuItems = document.querySelectorAll('.nav li a[href*="#"] ul.subnav');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        // console.log(this);
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
    
}














