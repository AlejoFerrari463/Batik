const misProductos = [

    { id:1, nombre: "Zapatillas Nike Jordan 1", precio: 350000, imagen:"./img/ZapasNikeJordan-1.png", categoria: "zapatillas" },
    { id:2, nombre: "Campera Adidas Beckenbauer", precio: 300000, imagen: "./img/CamperaAdidas-2.webp", categoria: "camperas" },
    { id:3, nombre: "Ojotas Adilette", precio: 50000, imagen: "./img/OjotasAdilette-3.jfif", categoria: "camperas" },
    { id:4, nombre: "Gorra Puma", precio: 10000, imagen: "./img/GorraPuma-4.webp", categoria: "zapatillas" },
    { id:5, nombre: "Remera Retro", precio: 70000, imagen: "./img/RemeraRetro-5.jpg" , categoria: "remeras"},

]


export const obtenerProductos = () =>{

    return new Promise((resolve)=>{

        resolve(misProductos)

    })


}

export const obtenerUnProducto = (id) =>{

    return new Promise((resolve)=>{

        const producto = misProductos.find((item)=>item.id == id)

        resolve(producto)

    })


}