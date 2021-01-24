const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "i feel better than you little you peace of love",
  " i feel awesome",
  "Achraf you are awesome",
];

const Joke = [
  "Hear about the new restaurant called Karma ? Theres no menu: You get what you deserve.",
  "you are the big joke",
  "One joke, coming up! What is a sea monster’s favorite snack? Ships and dip",
  "This might make you laugh. How do robots eat guacamole? With computer chips",
];
const weather = [
  "today is wonderfull day keep up the smile",
  "you may need an umbrella",
];
const donKnow = ["i dont know", "can you tell me again"];
const achraf = [
  "Ashraf oudani is the best web developper and he is an awesome person",
  "Ashraf oudani is the best web developper and he is an awesome person",
];
const thankyou = [
  "always my pleaser",
  "you are welcome",
  "thank you for using me",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function () {
  console.log("voice is activated, you can to microphonee");
};
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};
//add Listener
btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  const txt = donKnow[Math.floor(Math.random() * weather.length)];
  speech.text = txt;
  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  } else if (message.includes("joke")) {
    const finalText = Joke[Math.floor(Math.random() * Joke.length)];
    speech.text = finalText;
  } else if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  } else if (message.includes("Ashraf")) {
    const finalText = achraf[Math.floor(Math.random() * achraf.length)];
    speech.text = finalText;
  } else if (message.includes("thank")) {
    const finalText = thankyou[Math.floor(Math.random() * thankyou.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 0.5;
  window.speechSynthesis.speak(speech);
}
