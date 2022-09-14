//tomar el parametro de la url
let parametro = window.location.search; //Accedemos a todos los parametros de una url

let urlParametro = new URLSearchParams(parametro);
//dentro de aqui, hay un parametro que nos interesa(GET, que es una funcion)
//este get nos dira el valor del parametro que sea codigo! nos dara el dato que nos interesa para trabajar
//cuando tenga el codigo, buscar en localstorage, la peli que tiene el mismo codigo

let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

let productoBuscado = listaProductos.find(
  (producto) => producto.codigo === urlParametro.get("codigo")
);

//cuando la encuentre, dibujo la card con los datos de la pelicula

let seccionDetalle = document.querySelector("#seccionDetalle");
seccionDetalle.innerHTML = `
<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-5">
              <img src="${
                productoBuscado.imagen
              }" class="img-fluid rounded-start" alt="${
  productoBuscado.nombre
}">
            </div>
            <div class="col-md-7">
            
              <div class="card-body">
            
                <h3 class="card-title mt-2">${productoBuscado.nombre}</h5>
                <p class="card-text mt-2">${productoBuscado.descripcion}</p>
                <p class="card-text mt-2">El precio de este producto es: $ ${
                  productoBuscado.precio
                }/ud</p> 
                <div class="d-flex text-center mt-2">               
                <p class="card-text">Categoria: <span class="p-2 badge rounded-pill colorNav">${productoBuscado.categoria.toUpperCase()}</span></p>
                </div>
               
              </div>
              <a href="/index.html" class=""><button type="button" class="btn btn-outline-dark border-rounded-4 fw-light">Seguir comprando...</button>
            </div>
          </div>
          </div>
`;
