const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.
addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Selecciona todos los contenedores de imagen
const contenedoresImagenes = document.querySelectorAll('.imagen-contenedor');

// Función para mostrar cada imagen después de un tiempo determinado
function mostrarImagenes() {
  contenedoresImagenes.forEach((imagen, index) => {
    setTimeout(() => {
      imagen.classList.add('mostrar');
    }, 1000 * (index + 1));
  });
}

// Llama a la función para mostrar las imágenes después de 2 segundos
setTimeout(mostrarImagenes, 1500);


const form = document.querySelector("#contact-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.querySelector("#name").value;
  const message = document.querySelector("#message").value;
  
  const url = "https://api.whatsapp.com/send?phone=5493444440386&text=Nombre:%20" + encodeURIComponent(name) + "%0AMensaje:%20" + encodeURIComponent(message);
  
  window.open(url, "_blank");

  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#message").value = "";
});


  
  