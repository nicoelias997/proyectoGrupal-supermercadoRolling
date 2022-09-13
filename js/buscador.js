document.addEventListener("keyup",e=>{
    if(e.target.matches("#buscador")){
       console.log(e.target.value)
   
   

       document.querySelectorAll(".articulo").forEach(fruta =>{

           fruta.textContent.toLowerCase().includes(e.target.value.toLoLowerCase())?fruta.classList.remove("filtro")
           :fruta.classList.add("filtro")
       })
   }
})
// a cada producto agregarle el la class articulo