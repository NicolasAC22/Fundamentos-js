document.getElementById("ejecutar").addEventListener("click", () => {
    const salida = document.getElementById("salida");
    const entrada = prompt("Introduce un número entero:");

    if (entrada === null) {
        salida.textContent = "Operación cancelada.";
        return;
    }

    const numero = Number(entrada);

    if (
        entrada.trim() === "" ||
        !Number.isFinite(numero) ||
        !Number.isInteger(numero)
    ) {
        salida.textContent = "Introduce un número entero válido.";
        return;
    }

    if (numero % 2 === 0) {
        salida.textContent = `${numero} es un número par.`;
    } else {
        salida.textContent = `${numero} es un número impar.`;
    }

    console.log(salida.textContent);
});