let trocar = document.querySelector("body")
let eu = document.querySelector(".eu")
let h1escuro = document.querySelector(".tracking-in-expand")
let formulas = document.querySelector(".formulario")
trocar.addEventListener("click", () => {
    trocar.classList.toggle("modoescuro");
    eu.classList.toggle("modoescuroEu");
    h1escuro.classList.toggle("margem");
    formulas.classList.toggle("rodape")
    console.log(trocar)
});