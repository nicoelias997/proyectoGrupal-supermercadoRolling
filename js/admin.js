import {validarDescription, validarEmail, validarGenero, validarImagen, validarNombre, validarTamanio} from "./validaciones.js"
import {Producto} from "./classProducto.js"


let listaProductos = []

//traer los input
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombreProd");
let descripcion = document.querySelector("#descripcion");
let tamanio = document.querySelector("#tamanio");
let imagen = document.querySelector("#imagen");
let genero = document.querySelector("#genero");

let btnCrearProducto = document.querySelector("#btnCrearProducto");
let formProducto = document.querySelector("#formProducto")
// crear una instancia de la ventana modal
const modalAdminProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);

nombre.addEventListener('blur',()=>{validarNombre(nombre)});
descripcion.addEventListener('blur',()=>{validarDescription(descripcion)});
imagen.addEventListener('blur',()=>{validarImagen(imagen)})
tamanio.addEventListener('blur',()=>{validarTamanio(tamanio)})
genero.addEventListener('blur',()=>{validarGenero(genero)})



btnCrearProducto.addEventListener('click', crearProducto);
formProducto.addEventListener('submit', guardarProducto);
//variable para ejecutar la funcion que crea peliculas o la que actualiza
function crearProducto(){
    modalAdminProducto.show();
    codigo.value = uuidv4();
}

function guardarProducto(e){
    e.preventDefault();
   //volver a validar todos los campos

   if(validarNombre(nombre) && validarDescription(descripcion) && validarImagen(imagen) && validarTamanio(tamanio) && validarGenero(genero)){
   //si los datos son correctos
   let nuevoProducto =  new Producto(codigo.value, nombre.value, descripcion.value, imagen.value,tamanio.value, genero.value);
   
   console.log(nuevoProducto)
   listaProductos.push(nuevoProducto);
   //limpiar formulario
   limpiarFormulario();
   console.log(listaProductos);
   //cerrar la ventana modal
   modalAdminProducto.hide();
}
   
}

function limpiarFormulario(){
    formProducto.reset()
    // modificar las clases de bootstrap si es necesario
}