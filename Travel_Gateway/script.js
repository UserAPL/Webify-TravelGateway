document.addEventListener('DOMContentLoaded', function () {
    const showMenu = document.getElementById('show-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const links = document.querySelector('.links');

    showMenu.addEventListener('click', function () {
        links.classList.toggle('show-links');
        menuIcon.classList.toggle('rotate-icon');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your message has been sent successfully! We will get back to you soon.');
        contactForm.reset();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.links a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-card img');
    let currentImageIndex = 0;

    function showNextImage() {
        galleryImages[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        galleryImages[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 5000); 
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = contactForm.querySelector('input[name="Name"]');
        const emailInput = contactForm.querySelector('input[name="Email"]');
        const messageInput = contactForm.querySelector('textarea[name="Message"]');
        
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill out all required fields.');
        } else {
            alert('Your message has been sent successfully! We will get back to you soon.');
            contactForm.reset();
        }
    });
});
