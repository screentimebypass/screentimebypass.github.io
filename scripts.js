let isNavOpen = false;

if (navigator.serviceWorker) {
        navigator.serviceWorker.register (
          '/sw.js',
        )
      }
function toggleNav() {
    if (isNavOpen) {
        closeNav();
    } else {
        openNav();
    }
}
function openNav() {
    const sidenav = document.getElementById("mySidenav")
    const menuButton = document.getElementById("menuButton")
    const closeButton = document.getElementById("closeButton")
    isNavOpen = true;
        sidenav.style.width = "100%";
        menuButton.src = "https://molchweb.github.io/picture/close.svg";
        closeButton.style.display = "none";
    }
}
  function closeNav() {  
    const sidenav = document.getElementById("mySidenav")
    const menuButton = document.getElementById("menuButton")
    const closeButton = document.getElementById("closeButton")
    isNavOpen = false;
    if (window.innerWidth <= 850) {
        sidenav.style.width = "0";
        menuButton.src = "https://molchweb.github.io/picture/menu.svg";
    } else {
        sidenav.style.width = "0";
        setTimeout (() => {
        }, 300);
    }
  }
  function returnHome() {
    window.location.href="index.html"
  }
