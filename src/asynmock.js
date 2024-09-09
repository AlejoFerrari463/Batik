const misProductos = [

    { id:1, nombre: "Zapatillas Nike Jordan 1", precio: 350000, imagen:"./img/ZapasNikeJordan-1.png" },
    { id:2, nombre: "Campera Adidas Beckenbauer", precio: 300000, imagen: "./img/CamperaAdidas-2.webp" },
    { id:3, nombre: "Ojotas Adilette", precio: 50000, imagen: "./img/OjotasAdilette-3.jfif" },
    { id:4, nombre: "Gorra Puma", precio: 10000, imagen: "./img/GorraPuma-4.webp" },
    { id:5, nombre: "Remera Retro", precio: 70000, imagen: "./img/RemeraRetro-5.jpg" },

]


export const obtenerProductos = () =>{

    return new Promise((resolve)=>{

        resolve(misProductos)

    })


}