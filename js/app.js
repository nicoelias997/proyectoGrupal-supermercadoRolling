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
let precioTotalCompra = 0;
let total = document.getElementById("total");

//Comprueba si listaProductos tiene algo
if (listaProductos.length > 0) {
  //Si es true maqueta las cards
  listaProductos.map((producto) => {
    maquetadoProducto(producto);
  });
} else {
  //Si es false muestra un mensaje de stock agotado
  grillaTodos.innerHTML = `<h1 class="display-1 fw-bold m-5 text-center">Por el momento no se encuentran productos en la tienda</h1>
  <h2 class="display-2 fw-bold mb-5 text-center">Por favor vuelva a ingresar mas tarde</h2>`;
}

//Funcion para maquetar el producto que se encuentre en el localStorage en su respectiva seccion
function maquetadoProducto(producto) {
  let categoria = producto.categoria;
  //Maqueta todos los productos de la lista
  grillaTodos.innerHTML += `
  <article class="card m-2 p-1 flex-nowrap articulo" style="width: 12rem;">
  <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
      <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
    </ul>
    <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
      Agregar
    </button>
    <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
  </div>
</article>`;
  //Maqueta los productos en sus respectivas categorias
  switch (categoria) {
    case "Almacen":
      {
        grillaAlmacen.innerHTML += `<article class=" articulo card m-2 p-1" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
    case "Bebidas":
      {
        grillaBebidas.innerHTML += `<article class="articulo card m-2 p-1 d-inline-block d-sm-flex flex-nowrap" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
    case "Frutas y Verduras":
      {
        grillaFrutasVerduras.innerHTML += `<article class="articulo card m-2 p-1 d-inline-block d-sm-flex flex-nowrap" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
    case "Congelados":
      {
        grillaCongelados.innerHTML += `<article class="card articulo m-2 p-1 d-inline-block d-sm-flex flex-nowrap" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
    case "Panaderia":
      {
        grillaPanaderia.innerHTML += `<article class="articulo card m-2 p-1 d-inline-block d-sm-flex flex-nowrap" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
    case "Limpieza":
      {
        grillaLimpieza.innerHTML += `<article class="articulo card m-2 p-1 d-inline-block d-sm-flex flex-nowrap" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
    case "Cuidado Personal":
      {
        grillaCuidadoPersonal.innerHTML += `<article class="articulo card m-2 p-1 d-inline-block d-sm-flex flex-nowrap" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
    case "Mascotas":
      {
        grillaMascotas.innerHTML += `<article class="articulo card m-2 p-1 d-inline-block d-sm-flex flex-nowrap" style="width: 15rem;">
        <img src="${producto.imagen}" class="card-img-top   d-sm-flex" alt="${producto.nombre}">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-truncate"><strong>${producto.nombre}</strong><br>${producto.descripcion}</li>
            <li class="list-group-item fs-5 fw-bold">$ ${producto.precio}</li>
          </ul>
          <button class="col-12 btn btn-outline-secondary agregarCarro mb-1" type="button" onclick='agregarAlCarro("${producto.codigo}")'>
            Agregar
          </button>
          <button class="btn btn-outline-secondary " type="button" onclick="verDetalle('${producto.codigo}')"><i class="bi bi-file-text"></i></button>
        </div>
      </article>`;
      }
      break;
  }
}

maquetadoCarrito();
function maquetadoCarrito() {
  listaCarrito = JSON.parse(localStorage.getItem("listaCarritoKey")) || [];
  if (listaCarrito.length > 0) {
    //Si es true maqueta las cards
    carritoContainer.innerHTML = ``;
    listaCarrito.map((producto) => {
      maquetadoProdCarrito(producto);
    });
  } else {
    total.innerHTML = "0";
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
    productoAgregado.stock = 1;
    productoAgregado.precioTotal =
      productoAgregado.stock * productoAgregado.precio;
    precioTotalCompra += productoAgregado.precioTotal;
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
          <p class=" fs-4 mb-0 me-1">Stock:</p>
            <button type="button" class="btn btn-outline-dark p-0 px-1 border-0" onclick='restarCantCarrito("${producto.codigo}")'><i class="bi bi-arrow-left"></i></button>
            <p class="mb-0 mx-1 border border-1 px-3">${producto.stock}</p>
            <button type="button" class="btn btn-outline-dark p-0 px-1 border-0" onclick='sumarCantCarrito("${producto.codigo}")'><i class="bi bi-arrow-right"></i></i></button>
          </div>
          <p class="fs-4 ms-1 mb-0">$${producto.precioTotal}</p>
        </div>
        <div class="w-25">
        <button type="button" class="btn ms-5" onclick='borrarDeCarrito("${producto.codigo}")'><i class="bi bi-x-square"></i>
        </div>
      </article>
      <hr>`;
  total.innerHTML = `${precioTotalCompra}`;
}

function restarCantCarrito(codigoBuscado) {
  let productoBuscado = listaCarrito.find(
    (producto) => producto.codigo === codigoBuscado
  );
  if (productoBuscado.stock > 1) {
    productoBuscado.stock--;
    productoBuscado.precioTotal =
      productoBuscado.stock * productoBuscado.precio;
    precioTotalCompra -= parseInt(productoBuscado.precio);
    guardarCarritoEnLocalStorage();
  }

  maquetadoCarrito();
}

function sumarCantCarrito(codigoBuscado) {
  let productoBuscado = listaCarrito.find(
    (producto) => producto.codigo === codigoBuscado
  );
  productoBuscado.stock++;
  productoBuscado.precioTotal = productoBuscado.stock * productoBuscado.precio;
  precioTotalCompra += parseInt(productoBuscado.precio);
  guardarCarritoEnLocalStorage();

  maquetadoCarrito();
}

function borrarDeCarrito(codigo) {
  let copiaListaCarrito = listaCarrito.filter(
    (producto) => producto.codigo != codigo
  );
  let productoBuscado = listaCarrito.find(
    (producto) => producto.codigo === codigo
  );
  precioTotalCompra -= productoBuscado.precioTotal;
  listaCarrito = copiaListaCarrito;

  //Actualizar el localstorage
  guardarCarritoEnLocalStorage();
  //Actualizar la tabla
  carritoContainer.innerHTML = "";
  maquetadoCarrito();
}

function verDetalle(codigo) {
  window.location.href =
    window.location.origin + "/pages/detalle.html?codigo=" + codigo;
}
