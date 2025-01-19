const Api = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"

const Productos = document.getElementById("productos")
                        
function pintadoraDeCards({internalName, salePrice, dealRating, thumb}){
    const contenedor = document.createElement("div")

    const titulo = document.createElement("h2")
    const precio = document.createElement("p")
    const Puntuacion = document.createElement("p")
    const img = document.createElement("img")

    titulo.innerText = internalName
    precio.innerText = "$" + salePrice
    Puntuacion.innerText = dealRating
    img.src = thumb

    contenedor.append(titulo, precio, Puntuacion, img)

    Productos.appendChild(contenedor)
 

}

document.addEventListener("DOMContentLoaded", async ()=>{
    const response = await fetch(Api)
    const data = await response.json()
    console.log(data)

    data.forEach(element => {
        pintadoraDeCards(element)
        
    });
})
