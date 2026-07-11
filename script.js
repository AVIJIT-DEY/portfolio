const text = [
  "Full Stack Developer",
  "ASP.NET Core Engineer",
  ".NET Core Developer"
];

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

type();

