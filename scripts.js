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

    // Smooth scrolling
    document.querySelectorAll('.scroll-button, .cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Apply pulsating effect to the word "life"
    const lifeElement = document.getElementById('life');
    lifeElement.classList.add('pulsating');
});