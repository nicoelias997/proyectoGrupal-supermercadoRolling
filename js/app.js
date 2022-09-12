// import { validarEmail } from "./validaciones";

// const email = document.getElementById("email").value
// const btnIdentificarse = document.getElementById("btn-identificarse");
// btnIdentificarse.addEventListener("click", (() => {identificarse}))

// const identificarse = () => {
//     if(validarEmail(email)){
//         Swal.fire('Any fool can use a computer')
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             footer: '<a href="">Why do I have this issue?</a>'
//           })
//     }

//Comprueba si el localStorage tiene datos
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let grillaProductos = document.getElementById("grillaProductos");
let carritoContainer = document.getElementById("carritoContainer")
//Comprueba si listaProductos tiene algo
if (listaProductos.length > 0) {
  //Si es true maqueta las cards
  listaProductos.map((producto) => {
    crearColumna(producto);
  });
} else {
  grillaProductos.innerHTML = `<h1 class="display-1 fw-bold m-5 text-center">Por el momento no se encuentran productos en la tienda</h1>
  <h2 class="display-2 fw-bold mb-5">Por favor vuelva a ingresar mas tarde</h2>`
}

function crearColumna(producto) {
  // Maqueta cada card que se encuentre en el la lista
  grillaProductos.innerHTML += `
  <article class="card m-2 p-1" style="width: 15rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
      <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
    </ul>
    <button class="col-12 btn btn-outline-danger agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
      Agregar
    </button>
    <button class="btn btn-outline-danger " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
  </div>
</article>`;
}

/* <a href="/pages/detalle.html" class="d-flex justify-content-center mt-2 link-danger" onclick="verDetalle('${producto.codigo}') id="linkVerMas">
<i class="bi bi-info-square-fill"></i>
</a> */

let listaProductosCarrito = [];

//Funcion para agregar producto al carrito
function agregarAlCarro(productoCarro) {
  let productoAgregado = listaProductos.find(
    (producto) => producto.codigo === productoCarro
  );
  //Comprueba que el producto no se encuentre ya en la lista del carrito 
  if (!listaProductosCarrito.includes(productoAgregado)) {
    listaProductosCarrito.push(productoAgregado);
    carritoContainer.innerHTML += `<article class="d-flex ">
    <div class="w-25 me-4">
      <img class="w-100" src="${productoAgregado.imagen}" alt="${productoAgregado.nombre}">
    </div>
    <div>
      <h5 class="h4 mb-0">${productoAgregado.nombre}</h5>
      <p class="ms-1 mb-0">$${productoAgregado.precio}</p>
      <div class="d-flex align-items-center ms-1 ">
        <button type="button" class="btn btn-danger p-0 px-1 border-0"><i class="bi bi-arrow-left"></i></button>
        <p class="fs-5 mb-0 mx-1">${productoAgregado.cantidad}</p>
        <button type="button" class="btn btn-danger p-0 px-1 border-0"><i class="bi bi-arrow-right"></i></i></button>
      </div>
    </div>
  </article>
  <hr>`
  }
}

function verDetalle(codigo){
  console.log(codigo);
  console.log(window.location.origin+'/pages/detalle.html?codigo='+codigo);
  window.location.href = window.location.origin+'/pages/detalle.html?codigo='+codigo
}
