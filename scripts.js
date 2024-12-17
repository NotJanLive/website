document.addEventListener("DOMContentLoaded", function() {
    const adjectives = ["simplicity", "elegance", "power", "creativity", "goal", "mystery", "innovation"];
    let index = 0;
    const adjectiveElement = document.getElementById("adjective");
    const typingSpeed = 100; // milliseconds
    const pauseDuration = 2000; // milliseconds

    function typeAdjective(text, callback) {
        let charIndex = 0;
        function type() {
            if (charIndex < text.length) {
                adjectiveElement.textContent += text.charAt(charIndex);
                adjectiveElement.style.color = "#a101a1";
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(callback, pauseDuration);
            }
        }
        type();
    }

    function deleteAdjective(callback) {
        let charIndex = adjectiveElement.textContent.length;
        function del() {
            if (charIndex > 0) {
                adjectiveElement.textContent = adjectiveElement.textContent.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(del, typingSpeed);
            } else {
                setTimeout(callback, typingSpeed);
            }
        }
        del();
    }

    function loopAdjectives() {
        typeAdjective(adjectives[index], function() {
            deleteAdjective(function() {
                index = (index + 1) % adjectives.length;
                loopAdjectives();
            });
        });
    }

    loopAdjectives();

    // Smooth scrolling for buttons
    document.querySelectorAll('.scroll-button, .cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle dropdown menu
    const navbarToggle = document.querySelector('.navbar-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    navbarToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbarToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        }
    });
});