const text = [
  "Full Stack Developer",
  "ASP.NET Core Engineer",
  ".NET Core Developer"
];

const experienceStartDate = new Date("2023-12-13T00:00:00");

function updateExperienceDuration() {
  const now = new Date();
  const elapsedYears = (now - experienceStartDate) / (1000 * 60 * 60 * 24 * 365.25);
  const yearsValue = `${elapsedYears.toFixed(1)}+`;

  const experienceSummary = document.getElementById("experience-summary");
  const yearsExperience = document.getElementById("years-experience");

  if (experienceSummary) {
    experienceSummary.textContent = `Dynamic full-stack developer with ${yearsValue} years of hands-on experience building scalable web applications using ASP.NET Core, Web API, SQL Server, and Angular.`;
  }

  if (yearsExperience) {
    yearsExperience.textContent = yearsValue;
  }
}

let index = 0;
let char = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (char < text[index].length) {
    typingElement.textContent += text[index].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1800);
  }
}

function erase() {
  if (char > 0) {
    typingElement.textContent = text[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}

updateExperienceDuration();
type();

