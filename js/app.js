import { Persona } from "./classPersonas";

let nombre = document.getElementById("nombre");

function nombre(input) {
  let nombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  if (nombre.test(input.value)) {
    input.classname = "form-control is-valid";
    return true;
  } else{
    input.classname = "form-control is-invalid";
    return false;
  }
}
