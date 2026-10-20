document.getElementById("ejecutar").addEventListener("click", () => {
    const salida = document.getElementById("salida");

    const entrada1 = prompt("Introduce el primer número:");

    if (entrada1 === null) {
        salida.textContent = "Operación cancelada.";
        return;
    }

    const entrada2 = prompt("Introduce el segundo número:");

    if (entrada2 === null) {
        salida.textContent = "Operación cancelada.";
        return;
    }

    if (entrada1.trim() === "" || entrada2.trim() === "") {
        salida.textContent = "Error: no dejes campos vacíos.";
        console.error("Entrada vacía.");
        return;
    }

    const numero1 = Number(entrada1);
    const numero2 = Number(entrada2);

    if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
        salida.textContent = "Error: introduce dos números válidos.";
        console.error("Entrada no numérica.");
        return;
    }

    const suma = numero1 + numero2;

    salida.textContent = `${numero1} + ${numero2} = ${suma}`;
    console.log("Resultado de la suma:", suma);
});