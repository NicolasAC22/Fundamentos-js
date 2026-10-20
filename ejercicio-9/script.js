function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const original = document.getElementById("texto").value;
    const invertida = invertirCadena(original);

    document.getElementById("salida").textContent =
        `Original: ${original} | Invertida: ${invertida}`;
});