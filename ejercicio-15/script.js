function esPrimo(num) {
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            return false;
        }
    }

    return true;
}

document.getElementById("ejecutar").addEventListener("click", () => {
    const campo = document.getElementById("limite");
    const limite = Number(campo.value);
    const salida = document.getElementById("salida");

    if (
        campo.value.trim() === "" ||
        !Number.isInteger(limite) ||
        limite < 1 ||
        limite > 100000
    ) {
        salida.textContent = "Introduce un entero entre 1 y 100000.";
        return;
    }

    const primos = [];

    for (let numero = 2; numero <= limite; numero++) {
        if (esPrimo(numero)) {
            primos.push(numero);
        }
    }

    salida.textContent =
        `Números primos hasta ${limite}: ${primos.join(", ") || "ninguno"}`;
});