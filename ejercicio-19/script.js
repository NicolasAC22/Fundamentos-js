function calcularPromedio(numeros) {
    if (numeros.length === 0) {
        return null;
    }

    const suma = numeros.reduce(
        (acumulador, numero) => acumulador + numero,
        0
    );

    return suma / numeros.length;
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

    salida.textContent =
        `Array: [${numeros.join(", ")}] | Promedio: ${calcularPromedio(numeros)}`;
});