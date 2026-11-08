/* const btn = document.getElementById("helloBtn");
const greeting = document.getElementById("greeting");

btn.addEventListener("click", () => {
    greeting.textContent = "Hello, World!";
}); */


const btn = document.getElementById("helloBtn");
const greeting = document.getElementById("greeting");

btn.addEventListener("click", () => {
    greeting.textContent = "Hello, world!";

    if (btn.style.backgroundColor === "green") {
        btn.style.backgroundColor = "blue";
    } else {
        btn.style.backgroundColor = "green";
    }
});
