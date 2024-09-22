const boton = document.getElementById("buttonText");

boton.addEventListener('click', () => {
    localStorage.setItem("dato", document.getElementById("inputText").value)
});