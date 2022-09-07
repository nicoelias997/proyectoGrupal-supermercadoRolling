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
let grillaProductos = document.querySelector("#grillaProductos");

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
      <li class="list-group-item">${producto.nombre}</li>
      <li class="list-group-item">${producto.cantidad}</li>
      <li class="list-group-item">$ ${producto.precio}</li>
    </ul>
    <button class="col-12 btn btn-danger agregarCarro" type="submit">
      Agregar
    </button>
  </div>
</article>`;
}

// function verDetalle(codigo) {
//   console.log(codigo);
//   console.log(window.location);
//   console.log(window.location.origin + "/pages/detalle.html?codigo=" + codigo);
//   window.location.href =
//     window.location.origin + "/pages/detalle.html?codigo=" + codigo;
// }
