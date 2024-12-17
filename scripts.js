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

    const lifeElement = document.getElementById('life');
    lifeElement.classList.add('pulsating');

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

    // Search functionality for projects
    const projects = [
        {
            title: "Project One",
            img: "path/to/your/image1.jpg",
            description: "A brief description of your first project.",
            tags: ["Fabric", "1.21.1"],
            favorite: true,
            link: "#"
        },
        {
            title: "Project Two",
            img: "path/to/your/image2.jpg",
            description: "A brief description of your second project.",
            tags: ["Forge", "1.20"],
            favorite: true,
            link: "#"
        },
        // Add more projects here
    ];

    const searchInput = document.getElementById("project-search");
    const projectList = document.querySelector(".project-list");
    const exploreMoreButton = document.getElementById("explore-more");
    const allProjectsPopup = document.getElementById("all-projects-popup");
    const closePopupButton = allProjectsPopup.querySelector(".close-button");

    function renderProjects(filteredProjects) {
        projectList.innerHTML = "";
        if (filteredProjects.length === 0) {
            projectList.innerHTML = "<p>There is no project under that name.</p>";
        } else {
            filteredProjects.forEach(project => {
                const projectItem = document.createElement("div");
                projectItem.classList.add("project-item");

                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <img src="${project.img}" alt="${project.title} Image">
                    <p>${project.description}</p>
                    <div class="tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                    </div>
                    <a href="${project.link}" class="more-button">More</a>
                `;

                projectList.appendChild(projectItem);
            });
        }
    }

    function filterProjects(query) {
        return projects.filter(project => project.title.toLowerCase().includes(query.toLowerCase()));
    }

    searchInput.addEventListener("input", function() {
        const query = searchInput.value;
        const filteredProjects = filterProjects(query);
        renderProjects(filteredProjects);
    });

    exploreMoreButton.addEventListener("click", function() {
        allProjectsPopup.style.display = "flex";
        renderAllProjects(projects);
    });

    closePopupButton.addEventListener("click", function() {
        allProjectsPopup.style.display = "none";
    });

    function renderAllProjects(projects) {
        const allProjectsList = allProjectsPopup.querySelector(".all-projects-list");
        allProjectsList.innerHTML = "";
        projects.forEach(project => {
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");

            projectItem.innerHTML = `
                <h3>${project.title}</h3>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <a href="${project.link}" class="more-button">
                    <i class="fas fa-external-link-alt"></i> View Project
                </a>
            `;

            allProjectsList.appendChild(projectItem);
        });
    }

    // Render initial favorite projects
    renderProjects(projects.filter(project => project.favorite).slice(0, 2));
});