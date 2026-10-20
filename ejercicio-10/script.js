function encontrarMayor(numeros) {
    if (numeros.length === 0) {
        return null;
    }

    return Math.max(...numeros);
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
        salida.textContent = "Todos los valores deben ser números válidos.";
        return;
    }

    salida.textContent =
        `Array: [${numeros.join(", ")}] | Número mayor: ${encontrarMayor(numeros)}`;
});