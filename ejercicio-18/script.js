function palabraMasLarga(frase) {
    const palabras = frase.trim().split(/\s+/);

    if (frase.trim() === "") {
        return "";
    }

    let mayor = palabras[0];

    for (const palabra of palabras) {
        if (palabra.length > mayor.length) {
            mayor = palabra;
        }
    }

    return mayor;
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const frase = document.getElementById("frase").value;
    const salida = document.getElementById("salida");

    if (frase.trim() === "") {
        salida.textContent = "Introduce una frase.";
        return;
    }

    const palabra = palabraMasLarga(frase);

    salida.textContent =
        `La palabra más larga es "${palabra}" y tiene ${palabra.length} caracteres. Si hay empate, se devuelve la primera.`;
});