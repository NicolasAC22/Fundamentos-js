document.getElementById("ejecutar").addEventListener("click", () => {
    const campo = document.getElementById("numero");
    const salida = document.getElementById("salida");
    const valor = campo.value.trim();
    const numero = Number(valor);

    if (
        valor === "" ||
        !Number.isFinite(numero) ||
        !Number.isInteger(numero)
    ) {
        salida.textContent = "Introduce un número entero válido.";
        return;
    }

    salida.textContent = numero % 2 === 0
        ? `${numero} es par.`
        : `${numero} es impar.`;
});