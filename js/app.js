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
let listaCarrito = JSON.parse(localStorage.getItem("listaCarritoKey")) || [];

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
      <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
      <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
    </ul>
    <button class="col-12 btn btn-outline-danger agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
      Agregar
    </button>
    <button class="btn btn-outline-danger " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
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

maquetadoCarrito()
function maquetadoCarrito() {
  listaCarrito = JSON.parse(localStorage.getItem("listaCarritoKey")) || [];
  if (listaCarrito.length > 0) {
    //Si es true maqueta las cards
    carritoContainer.innerHTML = ``
    listaCarrito.map((producto) => {
      maquetadoProdCarrito(producto);
    });
  }
}

//Funcion para agregar producto a la lista del carrito
function agregarAlCarro(productoCarro) {
  listaCarrito = JSON.parse(localStorage.getItem("listaCarritoKey")) || [];

  //Trae el producto para agregar a la lista
  let productoAgregado = listaProductos.find(
    (producto) => producto.codigo === productoCarro
  );
  //Busca al producto en el local storage
  let produtoEstaEnCarrito = listaCarrito.findIndex(
    (producto) => producto.codigo === productoCarro
  );
  //Si el producto no se encuentra en la lista lo agrega
  if (produtoEstaEnCarrito === -1) {
    productoAgregado.cantidad = 1;
    productoAgregado.precioTotal = productoAgregado.cantidad * productoAgregado.precio;
    listaCarrito.push(productoAgregado);
    guardarCarritoEnLocalStorage();
  }
}

function guardarCarritoEnLocalStorage() {
  localStorage.setItem("listaCarritoKey", JSON.stringify(listaCarrito));
}
function guardarProductosEnLocalStorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

function maquetadoProdCarrito(producto) {
  carritoContainer.innerHTML += `<article class="d-flex">
        <div class="w-25 me-4">
          <img class="w-100" src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="w-50">
          <h5 class="h3 fw-bolder mb-0">${producto.nombre}</h5>
          <div class="d-flex align-items-center ms-1 ">
          <p class=" fs-4 mb-0 me-1">Cantidad:</p>
            <button type="button" class="btn btn-danger p-0 px-1 border-0" onclick='restarCantCarrito("${producto.codigo}")'><i class="bi bi-arrow-left"></i></button>
            <p class="mb-0 mx-1 border border-1 px-3">${producto.cantidad}</p>
            <button type="button" class="btn btn-danger p-0 px-1 border-0" onclick='sumarCantCarrito("${producto.codigo}")'><i class="bi bi-arrow-right"></i></i></button>
          </div>
          <p class="fs-4 ms-1 mb-0">$${producto.precioTotal}</p>
        </div>
        <div class="w-25">
        <button type="button" class="btn btn-danger ms-5" onclick='borrarDeCarrito("${producto.codigo}")'><i class="bi bi-x-square"></i>
        </div>
      </article>
      <hr>`;
}

function restarCantCarrito(codigoBuscado) {
  let productoBuscado = listaCarrito.find(
    (producto) => producto.codigo === codigoBuscado
  );
  if (productoBuscado.cantidad>1) {
    productoBuscado.cantidad--;   
    productoBuscado.precioTotal = productoBuscado.cantidad * productoBuscado.precio;
    guardarCarritoEnLocalStorage();
  }

  maquetadoCarrito();  
}

function sumarCantCarrito(codigoBuscado) {
  let productoBuscado = listaCarrito.find(
    (producto) => producto.codigo === codigoBuscado
  );
  productoBuscado.cantidad++;
  productoBuscado.precioTotal = productoBuscado.cantidad * productoBuscado.precio;
  guardarCarritoEnLocalStorage();

  maquetadoCarrito();  
}

function borrarDeCarrito(codigo) {
  let copiaListaCarrito = listaCarrito.filter(
    (producto) => producto.codigo != codigo
  );
  listaCarrito = copiaListaCarrito;
  //Actualizar el localstorage
  guardarCarritoEnLocalStorage();
  //Actualizar la tabla
  carritoContainer.innerHTML = "";
  maquetadoCarrito();  
}

function verDetalle(codigo) {
  console.log(codigo);
  console.log(window.location.origin + "/pages/detalle.html?codigo=" + codigo);
  window.location.href =
    window.location.origin + "/pages/detalle.html?codigo=" + codigo;
}
