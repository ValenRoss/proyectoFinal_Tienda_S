
document.getElementById("carritoIcon").addEventListener("click", ()=>{
    document.getElementById("carrito").classList.toggle("active")
    document.getElementById("carrito-contenedor").classList.toggle("on")
})



let Carrito = JSON.parse(localStorage.getItem("carrito")) || []

const Api = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
const carritoDom = document.getElementById("carrito")
const carrito = []


const Productos = document.getElementById("productos")

function actualizarCarrito(){
    carritoDom.innerHTML = ""

    localStorage.setItem("carrito", JSON.stringify(Carrito))

    carrito.forEach(el => {
        const {internalName, salePrice, thumb} = el
        const contenedor = document.createElement("div")
        contenedor.classList.add("card-carrito")

        const titulo = document.createElement("h2")
        const precioDom = document.createElement("p")
        const img = document.createElement("img")

        titulo.innerText = internalName
        precioDom.innerText = "U$" + salePrice
        img.src = thumb
        
        carritoDom.appendChild(contenedor)

        })

}   

function creadoraDeCards({internalName, salePrice, dealRating, thumb}){ 
    const contenedor = document.createElement("div")

    contenedor.classList.add("contenedor")

    const titulo = document.createElement("h2")
    const precioDom = document.createElement("p")
    const Puntuacion = document.createElement("p")
    const boton = document.createElement("button")
    const img = document.createElement("img")

    titulo.innerText = internalName
    precioDom.innerText = "U$" + salePrice
    Puntuacion.innerText = dealRating
    boton.innerText = "Comprar"
    img.src = thumb

    contenedor.append(titulo, precioDom, Puntuacion, img, boton)
    Productos.appendChild(contenedor)
    boton.addEventListener("click", () =>{
        let index = carrito.findIndex(el => el.internalName == internalName)

        carrito.push({
            internalName,
            salePrice,
            cantidad: 1
        })
        actualizarCarrito()
        Swal.fire({
            title: internalName  + "se añadio a tu carrito.",
            icon: "success",
            timer: 1100,
            showConfirmButton: false,
            toast: true,
            position: "top-end",
        })  

    })
    }    
    

document.addEventListener("DOMContentLoaded", async ()=>{
    const response = await fetch(Api)
    const data = await response.json()

    actualizarCarrito()
    console.log(data)

    data.forEach(element => {
        creadoraDeCards(element)
        
    });

})
