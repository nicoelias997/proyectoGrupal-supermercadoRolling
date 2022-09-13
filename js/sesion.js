function obtenerListaUsuario() {
  let listaUsuario = JSON.parse(localStorage.getItem("listaUsuarioLs"));
  if (listaUsuario == null) {
    listaUsuario = [
      ["1", "manu", " ibañez", "grupo@gmail.com", "rolling", "071202", "1"],
      ["2", "martin", " astorga", "martin@gmail.com", "martin", "071202", "2"],
    ];
  }

  return listaUsuario;
}
function validar(correo, contraseña) {
  let listaUsuario = obtenerListaUsuario();
  let accesso = false;

  for (let i = 0; i < listaUsuario.length; i++) {
    if (correo == listaUsuario[i][3] && contraseña == listaUsuario[i][4]) {
      console.log(contraseña);
      console.log(correo);
      accesso = true;
      sessionStorage.setItem(
        "usuarioActivo",
        listaUsuario[i][1] + "" + listaUsuario[i][2]
      );
      sessionStorage.setItem("rolUsuarioActivo", listaUsuario[i][6]);
    }
  }
  return accesso;
}

document
  .querySelector("#btnIngresar")
  .addEventListener("click", iniciarSession);
function iniciarSession() {
  let correoIngresado = "";
  let contraseñaIngresada = "";
  let Bacesso = false;

  correoIngresado = document.querySelector("#txtCorreo").value;
  contraseñaIngresada = document.querySelector("#txtContraseña").value;

  Bacesso = validar(correoIngresado, contraseñaIngresada);
  console.log(Bacesso);
  if (Bacesso == true) {
    ingresar();
  } else {
    alert(
      `No estas identificado? Habla con nuestro operador..`
    )
    window.location.href = "index.html";
    limpiarFormulario();     
  }
}
function ingresar() {
  let rol = sessionStorage.getItem("rolUsuarioActivo");
  switch (rol) {
    case "1":
      window.location.href = "./pages/administrador.html";
      break;
    case "2":
      window.location.href = "index.html";
      limpiarFormulario();

      break;
   
  }
}

function limpiarFormulario() {
  formularioDeIngreso.reset();
}


// let formulario = document.getElementById("formGeneraciones");
// edad.addEventListener("blur", ()=>{validarEmail(gmail)})

// const email = document.getElementById("validarmail").value
// const btnIdentificarse = document.getElementById("btnIngresar");
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
//     }}

// me parece que no es este el camino por que no creamos un objeto persona, me parece que en el case:2 , y en el default del switch se deberia hacer la validacion nomas, son esos dos casos en los que se ve la validacion.(en el case:2 si funciona con esa cuenta e martin pero en el default se me traba el codigo)