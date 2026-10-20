function contarPalabras(frase) {
    const limpia = frase.trim();

    if (limpia === "") {
        return 0;
    }

    return limpia.split(/\s+/).length;
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const frase = document.getElementById("frase").value;
    const cantidad = contarPalabras(frase);

    document.getElementById("salida").textContent =
        `La frase contiene ${cantidad} palabras.`;
});