const misProductos = [

    { id:1, nombre: "Zapatillas Nike Jordan", precio: 200000, imagen:"./img/ZapasNikeJordan-1.png" },
    { id:2, nombre: "Campera Adidas", precio: 300000 },
    { id:3, nombre: "Ojotas Addilete", precio: 50000 },
    { id:4, nombre: "Gorra Puma", precio: 10000 },
    { id:5, nombre: "Remera Retro", precio: 70000 },

]


export const obtenerProductos = () =>{

    return new Promise((resolve)=>{

        resolve(misProductos)

    })


}