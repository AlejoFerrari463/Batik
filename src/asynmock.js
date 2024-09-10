const misProductos = [

    { id:1, nombre: "Zapatillas Nike Jordan 1", precio: 200000, imagen:"../img/1-ZapasNikeJordan.png", categoria: "zapatillas",descripcion: "Jordan 1 Para Hombres Retro" },
    { id:2, nombre: "Campera Adidas Beckenbauer", precio: 150000, imagen: "../img/2-CamperaAdidas.webp", categoria: "camperas", descripcion: "Campera Retro Alemania VerdeAmarilla" },
    { id:3, nombre: "Rompe Viento Nike Repel", precio: 100000, imagen: "../img/3-RompeViento.jfif", categoria: "camperas" },
    { id:4, nombre: "Lebron XXI", precio: 230000, imagen: "../img/4-ZapatillasLebron.webp", categoria: "zapatillas" },
    { id:5, nombre: "Remera Retro Barcelona", precio: 70000, imagen: "../img/5-RemeraRetro.jpg" , categoria: "remeras"},

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


export const obtenerProductosCategoria = (id) =>{

    return new Promise((resolve)=>{

        const producto = misProductos.filter((item)=>item.categoria == id)

        resolve(producto)

    })


}