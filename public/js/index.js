const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})



const suma  = (a,b) => a + b;
const resta  = (a,b) => a - b;
const multi  = (a,b) => a * b;
const divi  = (a,b) => a / b;




/* ---SECCION DEL CARRITO DE COMPRAS--- */



    const pedirCatalogo = async () => {
      try {
        const response = await fetch('./public/catalogue.JSON')
        const data = await response.json();


        const cards = document.getElementById("cards");
        const cartContainer = document.getElementById("items");
        const emptyButton = document.getElementById("vaciarCarrito");
        const cartCounter = document.getElementById("contadorCarrito")
        const totalPrice = document.getElementById("precioTotal")

        emptyButton.addEventListener("click", () => {
          cart.length = 0;
          updateCart();
        })

        let cart = [];

        document.addEventListener('DOMContentLoaded', () => {
          if (localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            updateCart()
          }
        })


        data.forEach(producto => {
          const div = document.createElement(`div`);
          div.classList.add("card");
          div.innerHTML = ` <img src="${producto.image}">
                          <h4>${producto.nombre}</h4>
                          <h3>${producto.desc}</h3>
                          <p>$${producto.precio}</p>
                          <button class="btnAddToCart" id="btn${producto.id}">Add to cart</button>`;
          cards.appendChild(div)
    
          const boton = document.getElementById(`btn${producto.id}`);
    
          boton.addEventListener("click", () => {
            addToCart(producto.id);
        });
      });

    listProducts = data;

    const addToCart = (prodId) => {

      const existe = cart.some(prod => prod.id === prodId)
    
      if(existe){
        const prod = cart.map (prod => {
          (prod.id === prodId) ? prod.cantidad ++ : "";
        })
      } else {
        const item = listProducts.find((prod) => prod.id === prodId);
        cart.push(item)
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1300,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: `${item.nombre} agregado correctamente`
        })
      }
      updateCart()
    }
    
    const updateCart = () => {
      cartContainer.innerHTML = ""
    
      cart.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
          <p>${prod.nombre}</p>
          <p>Price: ${prod.precio}</p>
          <p>Amount: <span id="cantidad">${prod.cantidad}</span></p>
          <button onclick="removeFromCart(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></button>`
        cartContainer.appendChild(div)
    
        localStorage.setItem("cart", JSON.stringify(cart))
      })
      cartCounter.innerText = cart.length
      totalPrice.innerText = cart.reduce((acum , prod) => acum + prod.precio, 0)
    }
    
    const removeFromCart = (prodId) => {
      const item = cart.find((prod) => prod.id === prodId)
      const indice = cart.indexOf(item)
      cart.splice(indice, 1)
      localStorage.removeItem("cart", "item")

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1300,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: `${item.nombre} eliminado correctamente`
      })
            updateCart()
    }

        
      } catch (error) {
        console.log(error);
      }
  }

  pedirCatalogo();

/* SECCION DE CONTACTO */

let btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", () => {
  Swal.fire({
    toast: true,
    icon:'success',
    title:'Gmail enviado correctamente',
    timer:1300,
    showConfirmButton: false,
    position:'top-end'
  })
})