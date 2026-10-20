function contarVocales(palabra) {
    const vocales = "aeiouáéíóúü";
    let contador = 0;

    for (const letra of palabra.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const palabra = document.getElementById("palabra").value;
    const cantidad = contarVocales(palabra);

    document.getElementById("salida").textContent =
        `La palabra "${palabra}" contiene ${cantidad} vocales.`;
});