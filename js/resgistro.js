const crearcuenta = document.querySelector('#registro');
const correo = document.querySelector('#usuario');

const ate = document.querySelector('#atencion');

crearcuenta.addEventListener('submit', (evento) => {
    evento.preventDefault();
    swal({
        title: "Registro completado",
        text: `Revice su correo ${correo.value} para completar la verificación`,
        icon: "success",
        button: "Vale"
    });
})