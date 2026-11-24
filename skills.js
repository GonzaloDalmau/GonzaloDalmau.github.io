const skillGroups = {
  Languages: ["Python", "Java", "JavaScript"],
  Web: ["HTML", "CSS"],
};

const skillsContainer = document.getElementById("skillsContainer");

Object.entries(skillGroups).forEach(([category, skills]) => {
  const card = document.createElement("div");
  card.className = "card card-static";

  const heading = document.createElement("h3");
  heading.textContent = category;

  const list = document.createElement("ul");
  list.className = "skill-list";

  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = skill;
    list.appendChild(item);
  });

  card.append(heading, list);
  skillsContainer.appendChild(card);
});
