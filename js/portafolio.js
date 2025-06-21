document.addEventListener('DOMContentLoaded', function () {
    //Menu Movil
    const menuBtn = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__nav');

    menuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });

    //Cierra el menu al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.header__nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    //Scrolling 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    //Scroll en Header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(45, 45, 68, 0.95)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.backgroundColor = 'rgba(45, 45, 68, 0.9)';
            header.style.padding = '1rem 0';
        }
    });

    //Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            //Simulacion de envio de formulario
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = '¡Mensaje Enviado!';

                //Reseteo
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    //Efecto de maquina de escribir en el titulo
    const propicTitle = document.querySelector('.propic__title');
    if (propicTitle) {
        const text = propicTitle.textContent;
        propicTitle.textContent = '';

        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                propicTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    //Animacion de habilidades con el scrolling
    const skillsItems = document.querySelectorAll('.skills__item');

    const animateSkills = () => {
        skillsItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };

    //Inicio de habilidades con opacidad 0
    skillsItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateSkills);
    animateSkills();
});