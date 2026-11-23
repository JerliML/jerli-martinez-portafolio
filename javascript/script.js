const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});

const listaDesplegable = document.querySelector('.lista-desplegable');
const textoDesplegable = document.querySelector('#texto-desplegable');

const textosPorOpcion = {
    hola: 'Estudiante de diseño de la universidad Diego Portales, enamorada de mi carrera y lo fascinante que el diseño en todas sus expresiones puede ser. La capacidad de crear algo nuevo en base a un lenguaje propio impulsa mi pasión y da forma a lo que soy.<br /><br />Amo el arte en cualquiera de sus medios y a menudo se mezcla con mis proyectos personales de diseño, que la belleza y expresividad puedan ser funcionales es parte de mi visión del mundo.',
    creencias: 'dieta: carnívora.<br>religión: agnóstica.<br>política: centro izquierda.',
    nacimiento: 'día: 30.<br>mes: 06.<br>ciudad: la concepción.<br>estado: zulia.<br>país: venezuela.',
    educacion: 'enseñanza básica: Dr. Jesús Enrique Lossada.<br>enseñanza media: Liceo Bicentenario Poeta Vicente Huidobro.<br>pregrado: Licenciatura en Diseño con Mención Gráfico, Universidad Diego Portales. (sin finalizar aún)',
    identidad: 'género: <br>pronombres: ella/él/elle.<br>sexo asignado al nacer: femenino.<br>primer nombre: jerliana.<br>segundo nombre: isabel.<br>apellidos: martínez lópez.<br>estado civil: soltera.<br>nacionalidad: venezolana.',
    aplicaciones: 'photoshop.<br>illustrator<br>after effects.<br>figma.<br>vsc. (html, css, js)<br>clip studio paint.'
};

if (listaDesplegable && textoDesplegable) {
    listaDesplegable.addEventListener('change', (evento) => {
        const seleccion = evento.target.value;
        if (textosPorOpcion[seleccion]) {
            textoDesplegable.innerHTML = textosPorOpcion[seleccion];
        }
    });
}