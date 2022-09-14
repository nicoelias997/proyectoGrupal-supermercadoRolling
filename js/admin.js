import {
  validarDescription,
  validarGenero,
  validarImagen,
  validarNombre,
  validarCantidad,
  validarPrecio,
} from "./validaciones.js";
import { Producto } from "./classProducto.js";

let listaProductos = [];

//traer los input
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombreProd");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let cantidad = document.querySelector("#cantidad");
let precio = document.querySelector("#precio");
let genero = document.querySelector("#genero");

let btnCrearProducto = document.querySelector("#btnCrearProducto");
let formProducto = document.querySelector("#formProducto");
// crear una instancia de la ventana modal
const modalAdminProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);

let productoNuevo = true;

nombre.addEventListener("blur", () => {
  validarNombre(nombre);
});
descripcion.addEventListener("blur", () => {
  validarDescription(descripcion);
});
imagen.addEventListener("blur", () => {
  validarImagen(imagen);
});
cantidad.addEventListener("blur", () => {
  validarCantidad(cantidad);
});
precio.addEventListener("blur", () => {
  validarPrecio(precio);
});
genero.addEventListener("blur", () => {
  validarGenero(genero);
});

btnCrearProducto.addEventListener("click", crearProducto);
formProducto.addEventListener("submit", guardarProducto);
//variable para ejecutar la funcion que crea peliculas o la que actualiza
function crearProducto() {
  productoNuevo = true;
  limpiarFormulario();
  modalAdminProducto.show();
  codigo.value = uuidv4();
}

function guardarProducto(e) {
  e.preventDefault();
  //volver a validar todos los campos

  if (
    validarNombre(nombre) &&
    validarDescription(descripcion) &&
    validarImagen(imagen) &&
    validarCantidad(cantidad) &&
    validarPrecio(precio) &&
    validarGenero(genero) &&
    productoNuevo
  ) {
    //si los datos son correctos
    let nuevoProducto = new Producto(
      codigo.value,
      nombre.value,
      descripcion.value,
      imagen.value,
      cantidad.value,
      precio.value,
      genero.value
    );

    listaProductos.push(nuevoProducto);
    guardarProductosEnLocalStorage();
    crearLista(nuevoProducto);
    //limpiar formulario
    limpiarFormulario();

    //cerrar la ventana modal
    modalAdminProducto.hide();
  } else {
    actualizarProducto();
  }
}

function limpiarFormulario() {
  formProducto.reset();
  // modificar las clases de bootstrap si es necesario
}

const cargaInicial = () => {
  listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
  if (listaProductos.length > 0) {
    listaProductos.forEach((listaProducto) => {
      crearLista(listaProducto);
    });
  }
};

function crearLista(producto) {
  //esta funcion dibuja un tr
  let tablaProductos = document.querySelector("#tablaProductos");
  //creamos el tr con document.createElement o innerHTML del tbody
  tablaProductos.innerHTML += `<tr class="align-middle">
    <th scope="row">${producto.codigo}</th>
    <td>${producto.nombre}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.imagen}</td>
    <td>${producto.cantidad}</td>
    <td>${producto.precio}</td>
    <td>${producto.genero}</td>
    <td>
      <button class="btn colorNav btn-outline-dark mb-1" onclick='modificarProducto("${producto.codigo}")'>
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-outline-danger" onclick='borrarProducto("${producto.codigo}")'>
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`;
}

function guardarProductosEnLocalStorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}
cargaInicial();

window.borrarProducto = function (codigo) {
  //Alert para confirmar la eliminacion del producto
  Swal.fire({
    title: "Borrar producto",
    text: "¿Esta seguro de eliminar el producto? Este proceso no se puede revertir",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ffd803",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //Buscar el producto en el arreglo y borrarlo
      let copiaListaProductos = listaProductos.filter(
        (itemProducto) => itemProducto.codigo != codigo
      );
      listaProductos = copiaListaProductos;
      //Actualizar el localstorage
      guardarProductosEnLocalStorage();
      //Actualizar la tabla
      borrarTabla();
      cargaInicial();

      // Alert de borrado exitoso
      Swal.fire(
        "Producto borrado",
        "El producto se elimino correctamente",
        "success"
      );
    }
  });
};
function borrarTabla() {
  let tablaProductos = document.querySelector("#tablaProductos");
  tablaProductos.innerHTML = "";
}

window.modificarProducto = function (codigoBuscado) {
  //Cambio de estado de la variable productoNuevo
  productoNuevo = false;
  //buscar en el arreglo el producto que quiero editar
  let productoBuscado = listaProductos.find(
    (producto) => producto.codigo === codigoBuscado
  );

  //Abrir ventana modal con el formulario cargado con todos los datos del producto que se selecciono
  modalAdminProducto.show();
  codigo.value = productoBuscado.codigo;
  nombre.value = productoBuscado.nombre;
  descripcion.value = productoBuscado.descripcion;
  imagen.value = productoBuscado.imagen;
  cantidad.value = productoBuscado.cantidad;
  precio.value = productoBuscado.precio;
  genero.value = productoBuscado.genero;
};

function actualizarProducto() {
  //Tomar los datos cargados en el formulario, buscar el objeto que se esta editando y actualizar sus valores
  let posicionProductoBuscado = listaProductos.findIndex(
    (producto) => codigo.value === producto.codigo
  );

  //Modificar los valores dentro del arreglo
  listaProductos[posicionProductoBuscado].nombre = nombre.value;
  listaProductos[posicionProductoBuscado].descripcion = descripcion.value;
  listaProductos[posicionProductoBuscado].imagen = imagen.value;
  listaProductos[posicionProductoBuscado].cantidad = cantidad.value;
  listaProductos[posicionProductoBuscado].precio = precio.value;
  listaProductos[posicionProductoBuscado].genero = genero.value;
  //Actualizar el localstorage
  guardarProductosEnLocalStorage();
  //Actualizar la tabla
  borrarTabla();
  cargaInicial();
  //Alert de confirmacion de cambios
  Swal.fire(
    "El producto se actualizo correctamente",
    "Los datos delproducto seleccionado fueron actualizados",
    "success"
  );
  //cerrar la ventana modal
  modalAdminProducto.hide();
  //limpiar el formulario
  limpiarFormulario();
}
