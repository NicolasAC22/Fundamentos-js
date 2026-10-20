function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const campo = document.getElementById("celsius");
    const celsius = Number(campo.value);
    const salida = document.getElementById("salida");

    if (campo.value.trim() === "" || !Number.isFinite(celsius)) {
        salida.textContent = "Introduce una temperatura válida.";
        return;
    }

    const fahrenheit = celsiusAFahrenheit(celsius);

    salida.textContent =
        `${celsius} °C equivalen a ${fahrenheit} °F.`;
});