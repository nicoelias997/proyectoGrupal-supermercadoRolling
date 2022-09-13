import {validarDescription, validarEmail, validarGenero, validarImagen, validarNombre, validarCantidad} from "./validaciones.js"
import {Producto} from "./classProducto.js"


let listaProductos = []

//traer los input
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombreProd");
let descripcion = document.querySelector("#descripcion");
let cantidad = document.querySelector("#cantidad");
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
cantidad.addEventListener('blur',()=>{validarCantidad(cantidad)})
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

   if(validarNombre(nombre) && validarDescription(descripcion) && validarImagen(imagen) && validarCantidad(cantidad) && validarGenero(genero)){
   //si los datos son correctos
   let nuevoProducto =  new Producto(codigo.value, nombre.value, descripcion.value, imagen.value,cantidad.value, genero.value);
   
   console.log(nuevoProducto)
   listaProductos.push(nuevoProducto);
   guardarProductosEnLocalStorage();
crearLista(nuevoProducto)
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

const cargaInicial = () => {
    listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
    if(listaProductos.length > 0){
        listaProductos.forEach(listaProducto => {
            crearLista(listaProducto)
        })
    }
}

function crearLista(producto){
    //esta funcion dibuja un tr
    let tablaProductos = document.querySelector('#tablaProductos');
    //creamos el tr con document.createElement o innerHTML del tbody
    tablaProductos.innerHTML += `<tr class="align-middle">
    <th scope="row">${producto.codigo}</th>
    <td>${producto.nombre}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.imagen}</td>
    <td>${producto.cantidad}</td>
    <td>${producto.genero}</td>
    <td>
      <button class="btn btn-warning" >
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-danger">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`;
  console.log(tablaProductos);
  limpiarFormulario()
}

function guardarProductosEnLocalStorage(){
    localStorage.setItem('listaProductosKey', JSON.stringify(listaProductos));
}
cargaInicial();