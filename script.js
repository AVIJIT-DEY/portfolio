const text = ["Software Developer", "Web Developer", "Programmer"];
let index = 0;
let char = 0;

function type() {
  if (char < text[index].length) {
    document.getElementById("typing").innerHTML += text[index].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (char > 0) {
    document.getElementById("typing").innerHTML =
      text[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}

type();

