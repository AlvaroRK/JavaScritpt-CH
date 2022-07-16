const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})



const suma  = (a,b) => a + b;
const resta  = (a,b) => a - b;
const multi  = (a,b) => a * b;
const divi  = (a,b) => a / b;



    /* ---DEPLOY PRODUCTS--- */


    const cards = document.getElementById("cards");
    const cartContainer = document.getElementById("items");
    const emptyButton = document.getElementById("vaciarCarrito");
    const cartCounter = document.getElementById("contadorCarrito")
    const totalPrice = document.getElementById("precioTotal")

    emptyButton.addEventListener("click", () => {
      cart.length = 0
      updateCart()
    })

let listProducts = [
  {id:1 ,image:"./public/assets/img/Fernet 550X550.png" ,desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Fernet Branca 750ml", precio: 1300, cantidad:1},
  {id:2 ,image:"./public/assets/img/CocaCola 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Coca Cola 1.5Lts", precio: 190, cantidad:1},
  {id:3 ,image:"./public/assets/img/Mate 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Mate", precio: 1400, cantidad:1},
  {id:4 ,image:"./public/assets/img/YerbaMate 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Yerba mate", precio: 700, cantidad:1},
  {id:5 ,image:"./public/assets/img/JorgitoChoco 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Alfajor Jorgito|chocolate", precio: 81, cantidad:1},
  {id:6 ,image:"./public/assets/img/DonSatur 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Don Satur Dulce", precio: 120, cantidad:1},
  {id:7 ,image:"./public/assets/img/PipasGirasol 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Pipas Girasol", precio: 50, cantidad:1},
  {id:8 ,image:"./public/assets/img/Chocolinas 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Chocolinas", precio: 170, cantidad:1},
  {id:9 ,image:"./public/assets/img/DulceDeLeche 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Dulce de leche", precio: 500, cantidad:1},
  {id:10 ,image:"./public/assets/img/Tita 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Tita", precio: 75, cantidad:1},
  {id:11 ,image:"./public/assets/img/Havanna 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Alfajor Havanna 12unids", precio: 2800, cantidad:1},
  {id:12 ,image:"./public/assets/img/PicoDulce 550X550.png",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eaque?",nombre: "Pico Dulce", precio: 800, cantidad:1},
];

/* ---SECCION DEL CARRITO DE COMPRAS--- */

let cart = [];

listProducts.forEach(producto => {
  const div = document.createElement(`div`);
  div.classList.add("card")
  div.innerHTML = ` <img src="${producto.image}">
                    <h4>${producto.nombre}</h4>
                    <h3>${producto.desc}</h3>
                    <p>$${producto.precio}</p>
                    <button class="btnAddToCart" id="btn${producto.id}">Add to cart</button>
 `;
  cards.appendChild(div)

   const boton = document.getElementById(`btn${producto.id}`)

  boton.addEventListener("click", () => {
    addToCart(producto.id)
  })
});

const addToCart = (prodId) => {
  const item = listProducts.find((prod) => prod.id === prodId);
  cart.push(item)
  updateCart()
  console.log(cart)
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
      <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></button>`
    cartContainer.appendChild(div)
  })
  cartCounter.innerText = cart.length
  totalPrice.innerText = cart.reduce((acum , prod) => acum + prod.precio, 0)
}

const removeFromCart = (prodId) => {
  const item = cart.find((prod) => prod.id === prodId)
  const indice = cart.indexOf(item)
  cart.splice(indice, 1)
  updateCart()
}