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

let listaProductosCarrito = [];
let grillaTodos = document.getElementById("grillaTodos");
let grillaAlmacen = document.getElementById("grillaAlmacen");
let grillaBebidas = document.getElementById("grillaBebidas");
let grillaFrutasVerduras = document.getElementById("grillaFrutasVerduras");
let grillaCongelados = document.getElementById("grillaCongelados");
let grillaPanaderia = document.getElementById("grillaPanaderia");
let grillaLimpieza = document.getElementById("grillaLimpieza");
let grillaCuidadoPersonal = document.getElementById("grillaCuidadoPersonal");
let grillaMascotas = document.getElementById("grillaMascotas");
let carritoContainer = document.getElementById("carritoContainer");

//Comprueba si listaProductos tiene algo
if (listaProductos.length > 0) {
  //Si es true maqueta las cards
  listaProductos.map((producto) => {
    maquetadoProducto(producto);
  });
} else {
  //Si es false muestra un mensaje de stock agotado
  grillaTodos.innerHTML = `<h1 class="display-1 fw-bold m-5 text-center">Por el momento no se encuentran productos en la tienda</h1>
  <h2 class="display-2 fw-bold mb-5">Por favor vuelva a ingresar mas tarde</h2>`;
}

//Funcion para maquetar el producto que se encuentre en el localStorage en su respectiva seccion
function maquetadoProducto(producto) {
  let categoria = producto.genero;

  //Maqueta todos los productos de la lista
  grillaTodos.innerHTML += `
  <article class="card m-2 p-1" style="width: 15rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${producto.nombre}</li>
      <li class="list-group-item">${producto.cantidad}</li>
      <li class="list-group-item">$ ${producto.precio}</li>
    </ul>
    <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
      Agregar
    </button>
  </div>
</article>`;
  //Maqueta los productos en sus respectivas categorias
  switch (categoria) {
    case "Almacen":
      {
        grillaAlmacen.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${producto.nombre}</li>
      <li class="list-group-item">${producto.cantidad}</li>
      <li class="list-group-item">$ ${producto.precio}</li>
    </ul>
    <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
      Agregar
    </button>
  </div>
</article>`;
      }
      break;
    case "Bebidas":
      {
        grillaBebidas.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.nombre}</li>
            <li class="list-group-item">${producto.cantidad}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
        </div>
      </article>`;
      }
      break;
    case "Frutas y Verduras":
      {
        grillaFrutasVerduras.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.nombre}</li>
            <li class="list-group-item">${producto.cantidad}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
        </div>
      </article>`;
      }
      break;
    case "Congelados":
      {
        grillaCongelados.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.nombre}</li>
            <li class="list-group-item">${producto.cantidad}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
        </div>
      </article>`;
      }
      break;
    case "Panaderia":
      {
        grillaPanaderia.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.nombre}</li>
            <li class="list-group-item">${producto.cantidad}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
        </div>
      </article>`;
      }
      break;
    case "Limpieza":
      {
        grillaLimpieza.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.nombre}</li>
            <li class="list-group-item">${producto.cantidad}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
        </div>
      </article>`;
      }
      break;
    case "Cuidado Personal":
      {
        grillaCuidadoPersonal.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.nombre}</li>
            <li class="list-group-item">${producto.cantidad}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
        </div>
      </article>`;
      }
      break;
    case "Mascotas":
      {
        grillaMascotas.innerHTML += `<article class="card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.nombre}</li>
            <li class="list-group-item">${producto.cantidad}</li>
            <li class="list-group-item">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-danger agregarCarro" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
        </div>
      </article>`;
      }
      break;
  }
}

//Funcion para agregar producto al carrito
function agregarAlCarro(productoCarro) {
  let productoAgregado = listaProductos.find(
    (producto) => producto.codigo === productoCarro
  );
  //Comprueba que el producto no se encuentre en la lista del carrito para evitar maquetar 2 veces
  if (!listaProductosCarrito.includes(productoAgregado)) {
    listaProductosCarrito.push(productoAgregado);
    carritoContainer.innerHTML += `<article class="d-flex">
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
  <hr>`;
  }
}

// function verDetalle(codigo) {
//   console.log(codigo);
//   console.log(window.location);
//   console.log(window.location.origin + "/pages/detalle.html?codigo=" + codigo);
//   window.location.href =
//     window.location.origin + "/pages/detalle.html?codigo=" + codigo;
// }
