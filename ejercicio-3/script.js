document.getElementById("ejecutar").addEventListener("click", () => {
    const persona = {
        nombre: "Laura",
        edad: 25,
        activo: true,
        aficiones: ["leer", "viajar", "música"],
        direccion: {
            calle: "Gran Vía",
            ciudad: "Madrid"
        }
    };

    console.log("Objeto persona:", persona);
    console.table(persona);

    document.getElementById("salida").innerHTML = `
        <pre>${JSON.stringify(persona, null, 2)}</pre>
        <p><strong>console.log():</strong> permite inspeccionar el objeto completo.</p>
        <p><strong>console.table():</strong> presenta las propiedades en forma de tabla.</p>
    `;
});