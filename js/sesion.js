function obtenerListaUsuario() {
  let listaUsuario = JSON.parse(localStorage.getItem("listaUsuarioLs"));
  if (listaUsuario == null) {
    listaUsuario =
    [  ["1", "manu", " ibañez", "manuel@gmail.com","manuel", "071202", "1"],
      ["2", "manuel", " ibañez", "martin@gmail","martin", "071202", "2"]]
  }

  return listaUsuario
}
function validar(correo, contraseña){
let listaUsuario = obtenerListaUsuario()

let accesso= false

for(let i = 0; i < listaUsuario.length ; i++){
    if(correo ==listaUsuario[i][3]&&contraseña == listaUsuario[i][4]){

        
        accesso == true;
        sessionStorage.setItem('usuarioActivo',listaUsuario[i][1] + '' + listaUsuario[i][2])    
        sessionStorage.setItem('rolUsuarioActivo', listaUsuario[i][6])
    }
}
return accesso
}




document.querySelector('#btnIngresar').addEventListener('click', iniciarSession);
function iniciarSession(){

    let correoIngresado = '';
    let contraseñaIngresada='';
    let Bacesso= false;

    correoIngresado= document.querySelector('#txtCorreo').value;
    contraseñaIngresada = document.querySelector('#txtContraseña').value;


    Bacesso  = validar(correoIngresado, contraseñaIngresada);
    console.log(Bacesso)
    if(Bacesso == true ){
        ingresar();
    }
}
function ingresar(){
  let rol= sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
   case '1':
    window.location.href = 'administrador.html';
    break;
    case '2':
    window.location.href = 'index.html';
    break;
    default:
      window.location.href = 'index.html';
    break;
    }

}
