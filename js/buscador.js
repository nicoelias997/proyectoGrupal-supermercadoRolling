document.addEventListener("keyup",e=>{
    if(e.target.matches("#buscador")){
       console.log(e.target.value)
   
   

       document.querySelectorAll(".articulo").forEach(producto =>{

           producto.textContent.toLowerCase().includes(e.target.value)?producto.classList.remove("filtro")
           :producto.classList.add("filtro")
       })
   }
})
// a cada producto agregarle el la class articulo