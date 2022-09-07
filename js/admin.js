class Producto {
    constructor(codigo, nombre, descripcion, imagen, tamanio, genero){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.tamanio = tamanio;
        this.genero = genero;
    }
}

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

function limpiarFormulario(){
    formProducto.reset()
    // modificar las clases de bootstrap si es necesario
}