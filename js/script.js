const lampadaOn = document.querySelector(".lampadaOn");
const lampadaOff = document.querySelector(".lampadaOff");
const tituloEl = document.querySelector(".titulo");

lampadaOff.addEventListener("click", (e) => {
    e.preventDefault();

    tituloEl.innerText = "Parabéns!";

    lampadaOff.style.display = "none";
    lampadaOn.style.display = "block";

});
lampadaOn.addEventListener("click", (e) => {
    e.preventDefault();

    tituloEl.innerHTML = "Acenda a lampada!";

    lampadaOn.style.display = "none";
    lampadaOff.style.display = "block";
});
