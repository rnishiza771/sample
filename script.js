document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.querySelector("h1");
    welcomeMessage.addEventListener("click", () => {
        welcomeMessage.style.color = "blue";
        alert("やっほー、クリックしてくれてありがとう！");
    });
});

document.querySelector("h2").addEventListener("click", () => {
    alert("このセクションをクリックしました！");
});

window.addEventListener("scroll", () => {
    document.body.style.backgroundColor = window.scrollY > 100 ? "#f0f8ff" : "white";
});

const welcome = document.querySelector("h1");
welcome.style.transition = "all 0.5s ease";
welcome.addEventListener("mouseover", () => {
    welcome.style.transform = "scale(1.2)";
});
welcome.addEventListener("mouseout", () => {
    welcome.style.transform = "scale(1)";
});

myButton.addEventListener("click", () => {
    window.location.href = "https://reiwa.co/";
});
