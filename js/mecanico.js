const mecanico = document.querySelector('#buscar_mec');

mecanico.addEventListener('submit', (evento) => {
    evento.preventDefault();
    swal({
        title: "No se encontró el mecanico solicitado",
        icon: "error",
        button: "Vale"
    });
})