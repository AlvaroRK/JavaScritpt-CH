const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})



const suma  = (a,b) => a + b;
const resta  = (a,b) => a - b;
const multi  = (a,b) => a * b;
const divi  = (a,b) => a / b;



    /* ---COSTO TOTAL DE PRODUCTOS--- */



    const shopCart = [];

    const discount1 = 300;
    const discount2 = 100;
    
    let totalPagar = 0;
    let cantProductos = parseInt(prompt("Enter the number of products to take"));
    let presupuesto = parseInt(prompt("Tell me your budget"));
    
    for (let i=1; i<= cantProductos; i++) {
    
        class productos {
            constructor (name, price, amount) {
                this.name = name;
                this.price = price;
                this.amount = amount;
                this.soldOut = false;
            }
        
            sell(){
                this.soldOut = true;
            }
        }
    
        let nameProduct = prompt(`Enter product name ${i}`);
        let priceProduct = parseFloat(prompt("Enter the price of the product:"));
        let cantProduct = parseFloat(prompt("Enter the quantity of the product:"));
        let priceCant = 0;
    
        if (cantProduct > 5 ) {
            priceCant = resta(multi(priceProduct, cantProduct), discount1);
            console.log("You used the $300 discount");
        } else if (cantProduct > 3 ) {
            priceCant = resta(multi(priceProduct, cantProduct), discount2);
            console.log("You used the $100 discount");
        }
        else {
            priceCant = multi(priceProduct, cantProduct);
        }
        
    
    
        let msj = (`You entered ${nameProduct} x ${cantProduct} by $${priceCant}`);
        console.log(msj);
    
        totalPagar += priceCant;
    
        if (totalPagar > presupuesto) {
            alert("YOU EXCEEDED YOUR BUDGET");
            console.log("YOU EXCEEDED YOUR BUDGET");
            break;
        }
    
    
        const producto$ = new productos(nameProduct, priceProduct, cantProduct);
        producto$.sell();

        shopCart.push(producto$);
    }

    console.log(shopCart);

    let msjTotal = "The total to pay is: $" + totalPagar;
        console.log(msjTotal);

    

    let deleteCart = prompt("Do you want to delete a product? yes or no");

    if (deleteCart == "yes") {
        let cantDelete = parseInt(prompt("How many products do you want to remove?"));

        for (let i = 1; i <= cantDelete; i++) {
            let pregNombre = prompt(`Product name ${i} to remove`);

            class eliminado {
                constructor(nombre){
                    this.nombre =nombre;
                }
            }

            const eliminar = []

            eliminar.push(new eliminado(pregNombre));

            const deleteCart = eliminar.find(el => el.nombre == pregNombre);
            console.log(deleteCart);
            
        }
    } 
    else {
            alert("Okey")
    }