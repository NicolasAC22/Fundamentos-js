function filtrarMayores(numeros, limite) {
    return numeros.filter(numero => numero > limite);
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const texto = document.getElementById("numeros").value.trim();
    const limiteTexto = document.getElementById("limite").value.trim();
    const salida = document.getElementById("salida");

    if (texto === "" || limiteTexto === "") {
        salida.textContent = "Introduce el array y el valor límite.";
        return;
    }

    const numeros = texto.split(",").map(valor => Number(valor.trim()));
    const limite = Number(limiteTexto);

    if (
        numeros.some(numero => !Number.isFinite(numero)) ||
        !Number.isFinite(limite)
    ) {
        salida.textContent = "Todos los valores deben ser números válidos.";
        return;
    }

    const resultado = filtrarMayores(numeros, limite);

    salida.textContent =
        `Array original: [${numeros.join(", ")}] | Límite: ${limite} | Resultado: [${resultado.join(", ")}]`;
});