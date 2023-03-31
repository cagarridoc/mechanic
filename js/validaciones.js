const usuarioRegistrado = 'pat.hernandez@profesor.duoc.cl';
const contrasenaRegistrada = '123';

const usuario = document.querySelector('#usuario');
const clave = document.querySelector('#clave');
const enviar = document.querySelector('.container_inicio');

const register = document.querySelector('#registrar');

enviar.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if(usuario.value != usuarioRegistrado || clave.value != contrasenaRegistrada) {
        swal({
            title: "Usuario o contraseña invalidos",
            text: "Intentelo nuevamanete",
            icon: "error",
            button: "Vale"
        });
    } else {
        document.location = '../pages/pagina_user.html'
    }
})

register.addEventListener('click', () => {
    document.location = '../pages/crear_cuenta.html';
})