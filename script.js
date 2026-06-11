const quotes = [
    "You are stronger than you think babyy🥺❤️",
    "Plss forgive me my lovee 🫂💖",
    "I will be your biggest supporter🙈💕",
    "Keep smiling, brighter days are coming 😍🌸",
    "Believe in yourself ghochii 😤✨",
    "You are my reason to smile 😘💖",
    "Never stop shining cutuu🌟",
    "Someone Who thanks the universe for you ❤️",
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");

let currentQuote = 0;

quoteBtn.addEventListener("click", () => {

    quoteText.innerText = quotes[currentQuote];

    currentQuote++;

    if(currentQuote >= quotes.length){
        currentQuote = 0;
    }

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

document.querySelectorAll('.quote-box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

});
document.querySelectorAll('.superpower').forEach(card => {

    card.addEventListener('click', () => {

        card.classList.add('active');

        setTimeout(() => {
            card.classList.remove('active');
        }, 300);

    });

});

const startDate = new Date("2023-06-12T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(
        (diff % (1000*60*60*24)) / (1000*60*60)
    );

    const minutes = Math.floor(
        (diff % (1000*60*60)) / (1000*60)
    );

    const seconds = Math.floor(
        (diff % (1000*60)) / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCounter();

setInterval(updateCounter,1000);
