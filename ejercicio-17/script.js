function ordenarNumeros(numeros) {
    return [...numeros].sort((a, b) => a - b);
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const texto = document.getElementById("numeros").value.trim();
    const salida = document.getElementById("salida");

    if (texto === "") {
        salida.textContent = "Introduce al menos un número.";
        return;
    }

    const numeros = texto.split(",").map(valor => Number(valor.trim()));

    if (numeros.some(numero => !Number.isFinite(numero))) {
        salida.textContent = "Introduce únicamente números válidos.";
        return;
    }

    const ordenados = ordenarNumeros(numeros);

    salida.textContent =
        `Original: [${numeros.join(", ")}] | Ordenado: [${ordenados.join(", ")}]`;
});