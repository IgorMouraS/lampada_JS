const lampadaOn = document.querySelector(".lampadaOn");
const lampadaOff = document.querySelector(".lampadaOff");

lampadaOff.addEventListener("click", (e) => {
    e.preventDefault();
    lampadaOff.style.display = "none";
    lampadaOn.style.display = "block";
});
lampadaOn.addEventListener("click", (e) => {
    e.preventDefault();
    lampadaOn.style.display = "none";
    lampadaOff.style.display = "block";
});