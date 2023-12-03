let button = document.querySelector(".glow-on-hover");
let k = document.querySelector("p1");

button.onclick = function() {
    console.log("1");
    k.textContent = k.textContent + 1;

};