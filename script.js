document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.querySelector("h1");
    welcomeMessage.addEventListener("click", () => {
        welcomeMessage.style.color = "blue";
        alert("やっほー、クリックしてくれてありがとう！");
    });
});
