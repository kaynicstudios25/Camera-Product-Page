function openTab(evt, contentName) {
        // Hide all tab content
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

        // Deactivate all tab links
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(contentName).style.display = "block";
        evt.currentTarget.className += " active";
    }

        document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".tablinks").click();
    });


var resize = document.getElementsById('productT');
window.onresize=function() {
    if (window.innerWidth <= 767) {
        resize.style = "font-size: 100px;";
    }
    else {
        resize.style = "font-size: 180px;";
    };
}