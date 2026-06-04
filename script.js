const words = [
  "Frontend Developer",
  "UI Designer",
  "Web Creator"
];

let wordIndex = 0;
let letterIndex = 0;

function typeEffect(){
  const element = document.getElementById("typing");

  if(!element) return;

  element.textContent =
      words[wordIndex].slice(0, letterIndex++);

  if(letterIndex > words[wordIndex].length){
      letterIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect,120);
}

typeEffect();