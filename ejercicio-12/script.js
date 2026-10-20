function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
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

    const pares = filtrarPares(numeros);

    salida.textContent =
        `Original: [${numeros.join(", ")}] | Pares: [${pares.join(", ")}]`;
});