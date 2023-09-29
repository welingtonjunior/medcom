import './styles.scss'


const navToggle = document.querySelector('.navbar-toggler');
        const navMenu = document.querySelector('.collapse');

        navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        });



