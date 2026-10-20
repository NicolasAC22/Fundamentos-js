function transformarTexto(texto) {
    return {
        original: texto,
        mayusculas: texto.toUpperCase(),
        minusculas: texto.toLowerCase()
    };
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    const resultado = transformarTexto(texto);
    const salida = document.getElementById("salida");

    salida.replaceChildren();

    for (const [nombre, valor] of Object.entries(resultado)) {
        const parrafo = document.createElement("p");
        parrafo.textContent = `${nombre}: ${valor}`;
        salida.appendChild(parrafo);
    }
});