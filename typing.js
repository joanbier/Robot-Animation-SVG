const box = document.querySelector(".typing");
const text = [
  "Hello!^My name is X Æ A-12 and I'm going to tell you a story!",

  "A long time ago, in RobotLand, lived a young Robot Scholar, named Alex ",

  "Unhappy, the young Scholar was spending his days wandering around his parents' domain, hoping to find more to learn.",

  "Soon, the young Scholar set out to explore the world, travelling far and wide. ^Even as he started out,his mood brightened considerably.",

  "One day, as he entered a foreign land, the young Scholar heard an unusual noise that made him stop. ^His heart did the same when a fearless Warrior, named Anna, appeared seemingly out of nowhere.",

  "She had come investigate news that a stranger had come to her land.",

  "The Scholar knew that his quest was over no further did he need to search. ^Approaching the Warrior, he took out the one and only Ring, which he happened to carry, and asked Anna if she would marry him",

  "The Scholar's erudite use of magical words were such that, much to Alex's delight, Anna took the Ring he had offered her.",

  "The young couple celebrated their happiness, and danced all day and all night. ^Years went by.  Alex and Anna were happy traveling together, side by side.",

  "A few years later, young Alexina was born. ^For many years afterwards, the happy family pursued their travels to the edge of Robotland. ^The End."
];
//The source of the content in text array comes from:
//http://rur-ple.sourceforge.net/en/fairy_tale.htm

let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 80; //czym większa wartość tym wolniejszy typing
const stop = 2000; //zatrzymanie między kolejnymi tekstami
let activeDOMElement = box;

const typing = newTime => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) {
        return;
      }
      return setTimeout(() => {
        box.textContent = "";
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing);
      }, stop);
    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement("p");
      box.appendChild(p);
      activeDOMElement = p;
    }

    if (!(letter === "^")) {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;
    wordIndex++;
  }
  requestAnimationFrame(typing);
};

typing();
