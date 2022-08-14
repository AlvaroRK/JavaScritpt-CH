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



    const requestCatalog = async () => {
      try {
        const response = await fetch('./public/catalogue.JSON')
        const data = await response.json();


        const cards = document.getElementById("cards");
        const cartContainer = document.getElementById("items");
        const emptyButton = document.getElementById("vaciarCarrito");
        const cartCounter = document.getElementById("contadorCarrito")
        const totalPrice = document.getElementById("precioTotal")

        emptyButton.addEventListener("click", () => {
          if (cart.length != 0){
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
              title: `cart emptied correctly`
            })
          }
          cart.length = 0;
          localStorage.removeItem("cart");
          updateCart();
        })

        let cart = [];

        data.forEach(product => {
          const div = document.createElement(`div`);
          div.classList.add("card");
          div.innerHTML = ` <img src="${product.image}">
                          <h4>${product.nombre}</h4>
                          <h3>${product.desc}</h3>
                          <p>$${product.precio}</p>
                          <button class="btnAddToCart" id="btn${product.id}">Add to cart</button>`;
          cards.appendChild(div)

          const boton = document.getElementById(`btn${product.id}`);
          boton.addEventListener("click", () => {
            addToCart(product.id);
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
          title: `${item.nombre} successfully added`
        })
      }
      updateCart()
    }
    
    const updateCart = () => {
      cartContainer.innerHTML = ""
      cart.forEach((prod) => {
        let PrecioXCantidad = multi(prod.precio, prod.cantidad)
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
          <p>${prod.nombre}</p>
          <p>Price: ${PrecioXCantidad}</p>
          <p>Amount: <span id="cantidad">${prod.cantidad}</span></p>
          <button id="botonEliminar(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></button>`
        cartContainer.appendChild(div)

        const botonEliminar = document.getElementById(`botonEliminar(${prod.id})`)
        botonEliminar.addEventListener('click', removeFromCart)
    
        localStorage.setItem("cart", JSON.stringify(cart))
      })
      cartCounter.innerText = cart.length
      totalPrice.innerText = cart.reduce((acum , prod) => acum + prod.precio * prod.cantidad , 0)
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
        title: `successfully removed`
      })
            updateCart()
    }

      if (localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCart()
      }
        
      } catch (error) {
        console.log(error);
      }
  }

  requestCatalog();

/* SECCION DE CONTACTO */

let btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", () => {
  Swal.fire({
    toast: true,
    icon:'success',
    title:'Gmail sent successfully',
    timer:1300,
    showConfirmButton: false,
    position:'top-end'
  })
})