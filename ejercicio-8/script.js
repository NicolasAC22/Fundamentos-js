function azar(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
        throw new Error("Introduce enteros y asegúrate de que el mínimo no supere al máximo.");
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const min = Number(document.getElementById("minimo").value);
    const max = Number(document.getElementById("maximo").value);
    const salida = document.getElementById("salida");

    try {
        const resultados = Array.from({ length: 10 }, () => azar(min, max));

        salida.textContent =
            `Resultados entre ${min} y ${max}: ${resultados.join(", ")}`;

        console.log("Resultados:", resultados);
        console.log("Todos dentro del intervalo:", resultados.every(n => n >= min && n <= max));
    } catch (error) {
        salida.textContent = error.message;
    }
});