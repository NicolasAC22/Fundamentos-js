document.getElementById("ejecutar").addEventListener("click", () => {
    const minimo = Number(document.getElementById("minimo").value);
    const maximo = Number(document.getElementById("maximo").value);
    const salida = document.getElementById("salida");

    if (
        document.getElementById("minimo").value === "" ||
        document.getElementById("maximo").value === "" ||
        !Number.isFinite(minimo) ||
        !Number.isFinite(maximo) ||
        minimo > maximo
    ) {
        salida.textContent = "Introduce límites válidos.";
        return;
    }

    const numeros = Array.from(
        { length: 100 },
        () => Math.floor(Math.random() * 101)
    );

    const filtrados = numeros.filter(
        numero => numero >= minimo && numero <= maximo
    );

    console.table(numeros.map((numero, indice) => ({
        indice,
        numero
    })));

    console.log("Números filtrados:", filtrados);

    salida.innerHTML = `
        <p><strong>Array original:</strong></p>
        <p>${numeros.join(", ")}</p>
        <p><strong>Intervalo:</strong> ${minimo} a ${maximo}</p>
        <p><strong>Números filtrados (${filtrados.length}):</strong></p>
        <p>${filtrados.join(", ") || "No hay coincidencias."}</p>
    `;
});