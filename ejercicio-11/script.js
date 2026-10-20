document.getElementById("ejecutar").addEventListener("click", () => {
    const numeros = Array.from(
        { length: 100 },
        () => Math.floor(Math.random() * 20) + 1
    );

    const frecuencias = {};

    for (const numero of numeros) {
        frecuencias[numero] = (frecuencias[numero] || 0) + 1;
    }

    const presentes = Object.entries(frecuencias)
        .sort((a, b) => Number(a[0]) - Number(b[0]));

    const total = presentes.reduce(
        (suma, [, frecuencia]) => suma + frecuencia,
        0
    );

    document.getElementById("salida").innerHTML = `
        <p><strong>Frecuencias:</strong></p>
        <pre>${presentes.map(([numero, frecuencia]) =>
            `${numero}: ${frecuencia}`
        ).join("\n")}</pre>
        <p>Total de apariciones: ${total}</p>
    `;

    console.table(Object.fromEntries(presentes));
    console.log("Suma de frecuencias:", total);
});