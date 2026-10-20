function esPalindromo(palabra) {
    const normalizada = palabra.toLowerCase().trim();
    const invertida = normalizada.split("").reverse().join("");

    return normalizada !== "" && normalizada === invertida;
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const palabra = document.getElementById("palabra").value;
    const salida = document.getElementById("salida");

    if (palabra.trim() === "") {
        salida.textContent = "Introduce una palabra.";
        return;
    }

    salida.textContent = esPalindromo(palabra)
        ? `"${palabra}" es un palíndromo.`
        : `"${palabra}" no es un palíndromo.`;
});