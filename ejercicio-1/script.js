document.getElementById("ejecutar").addEventListener("click", () => {
    const texto = "Hola JavaScript";
    const numero = 25;
    const booleano = true;
    const nulo = null;
    let indefinido;
    const array = [1, 2, 3];
    const objeto = { nombre: "Ana", edad: 20 };

    const datos = [
        ["Texto", texto],
        ["Número", numero],
        ["Booleano", booleano],
        ["Nulo", nulo],
        ["Indefinido", indefinido],
        ["Array", array],
        ["Objeto", objeto]
    ];

    const salida = document.getElementById("salida");
    salida.innerHTML = "";

    datos.forEach(([nombre, valor]) => {
        const parrafo = document.createElement("p");
        parrafo.textContent =
            `${nombre}: ${JSON.stringify(valor) ?? String(valor)} | Tipo: ${typeof valor}`;
        salida.appendChild(parrafo);

        console.log(nombre, valor, typeof valor);
    });

    console.error("Ejemplo de console.error()");
    console.info("Ejemplo de console.info()");
    console.debug("Ejemplo de console.debug()");

    console.log("Array:", array);
    console.table(datos.map(([nombre, valor]) => ({
        nombre,
        valor: JSON.stringify(valor) ?? String(valor),
        tipo: typeof valor
    })));
});