const themeToggleButton = document.querySelector('button');
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add('dark-mode');
}

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Java", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
];
const favouriteSkills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "Java", category: "Language" }
];

const showSkillsButton = document.getElementById('showSkillsButton');
const favouriteSkillsButton = document.getElementById('favouriteSkillsButton');
const skillsContainer = document.getElementById("skillsContainer");

function displaySkills(skillList) {
    skillsContainer.innerHTML = "";

    skillList.forEach(skill => {
        const card = document.createElement("div");

        card.classList.add("skill-card");

        card.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.category}</p>
        `;

        skillsContainer.appendChild(card);
    });
}

showSkillsButton.addEventListener("click", function() {
    displaySkills(skills);
});

favouriteSkillsButton.addEventListener("click", function() {
    displaySkills(favouriteSkills);
});

displaySkills(skills);