const botones = document.querySelectorAll(".filtro-btn");
const productos = document.querySelectorAll(".producto");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.dataset.filtro;

        // Filtrar productos
        productos.forEach(producto => {
            if (categoria === "todos" || producto.classList.contains(categoria)) {
                producto.style.display = "inline-block";
            } else {
                producto.style.display = "none";
            }
        });

        // Cambiar botón activo
        botones.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");
    });
});