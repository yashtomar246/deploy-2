const quotes = [
    "You are stronger than you think babyy🥺❤️",
    "Plss forgive me my lovee 🫂💖",
    "I will be your biggest supporter🙈💕",
    "Keep smiling, brighter days are coming 😍🌸",
    "Believe in yourself ghochii 😤✨",
    "You are my reason to smile 😘💖",
    "Never stop shining cutuu🌟",
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");

quoteBtn.addEventListener("click", () => {

    const random =
        Math.floor(Math.random() * quotes.length);

    quoteText.innerText = quotes[random];
});

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {

    const msg = prompt("Enter your message");

    if(msg){
        alert("Thank you for your message ❤️");
    }
});
document.querySelectorAll(".gallery-item img")
.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("active");

    });

});