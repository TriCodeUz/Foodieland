document.addEventListener("DOMContentLoaded", function () {
    let toggle_bar = document.querySelector('.toggle_bar');
    let nav_menu = document.querySelector('.nav_menu');
    let isOpen = false;

    let nav_overlay = document.querySelector('.nav_overlay');

    toggle_bar.addEventListener('click', () => {
        if (!isOpen) {
            nav_menu.classList.remove('animate-out');
            nav_menu.classList.add('animate-in');
            nav_menu.style.visibility = 'visible';
            nav_overlay.classList.add('active');
        } else {
            nav_menu.classList.remove('animate-in');
            nav_menu.classList.add('animate-out');

            nav_menu.addEventListener('animationend', function hideMenu(e) {
                if (e.animationName === 'slideOut') {
                    nav_menu.style.visibility = 'hidden';
                    nav_menu.removeEventListener('animationend', hideMenu);
                }
            });
            nav_overlay.classList.remove('active');
        }

        isOpen = !isOpen;
    });
    toggle_bar.addEventListener('click', () => {
        if (toggle_bar.classList.contains('fa-bars')) {
            toggle_bar.classList.remove('fa-bars');
            toggle_bar.classList.add('fa-xmark');
        } else {
            toggle_bar.classList.remove('fa-xmark');
            toggle_bar.classList.add('fa-bars');
        }
    });
});
let nav_menu = document.querySelector('.nav_menu');
console.log(nav_menu.offsetWidth);