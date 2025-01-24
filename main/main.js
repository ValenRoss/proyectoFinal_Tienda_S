const Api = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
const carritoDom = document.getElementById("carrito")
const carrito = []

const Productos = document.getElementById("productos")

function creadoraDeCards({internalName, salePrice, dealRating, thumb}){
    const contenedor = document.createElement("div")

    contenedor.classList.add("contenedor")

    const titulo = document.createElement("h2")
    const precio = document.createElement("p")
    const Puntuacion = document.createElement("p")
    const boton = document.createElement("button")
    const img = document.createElement("img")

    titulo.innerText = internalName
    precio.innerText = "U$" + salePrice
    Puntuacion.innerText = dealRating
    boton.innerText = "Comprar"
    img.src = thumb

    contenedor.append(titulo, precio, Puntuacion, img, boton)
    Productos.appendChild(contenedor)
    boton.addEventListener("click", () =>{
        carrito.push({
            internalName,
            salePrice,
            cantidad: 1
        })
    })

}

document.addEventListener("DOMContentLoaded", async ()=>{
    const response = await fetch(Api)
    const data = await response.json()
    console.log(data)

    data.forEach(element => {
        creadoraDeCards(element)
        
    });

})
