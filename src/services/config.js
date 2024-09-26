import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// IMPORTAMOS DOS FUNCIONES DE FIREBASE

//initializeApp:
//getFirestore:

const firebaseConfig = {
  apiKey: "AIzaSyCLwdeeETXDLgmNsIGl0INxKHmlRxY8qf4",
  authDomain: "batik-56ee2.firebaseapp.com",
  projectId: "batik-56ee2",
  storageBucket: "batik-56ee2.appspot.com",
  messagingSenderId: "133880838246",
  appId: "1:133880838246:web:ab03b625e893d7882b95a7",
  measurementId: "G-NW38QQMWS6"
};

  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


// import { collection, doc, writeBatch } from "firebase/firestore";

// const misProductos = [

//   { id:1, nombre: "Zapatillas Nike Jordan 1", precio: 200000, imagen:"../img/1-ZapasNikeJordan.png", categoria: "zapatillas",descripcion: "Jordan 1 Para Hombres Retro",stock: 2 },
//   { id:2, nombre: "Campera Adidas Beckenbauer", precio: 150000, imagen: "../img/2-CamperaAdidas.webp", categoria: "camperas", descripcion: "Campera Retro Alemania VerdeAmarilla",stock: 11 },
//   { id:3, nombre: "Rompe Viento Nike Repel", precio: 100000, imagen: "../img/3-RompeViento.jfif", categoria: "camperas", descripcion: "Rompeviento Nike Anti Agua",stock: 11 },
//   { id:4, nombre: "Lebron XXI", precio: 230000, imagen: "../img/4-ZapatillasLebron.webp", categoria: "zapatillas", descripcion: "Lebron XXI Moradas",stock: 11 },
//   { id:5, nombre: "Remera Retro Barcelona", precio: 70000, imagen: "../img/5-RemeraRetro.jpg" , categoria: "remeras", descripcion: "Remera Retro Barcelona (Henry)" ,stock: 11},
//   { id:6, nombre: "Remera Adidas Flame", precio: 80000, imagen: "../img/6-AdidasFlame.jfif" , categoria: "remeras", descripcion: "Remera Adidas Flame" ,stock: 11},
//   { id:7, nombre: "Adidas Campus Green", precio: 180000, imagen: "../img/7-CampusGreen.webp" , categoria: "zapatillas", descripcion: "Adidas Campus Green" ,stock: 23},
//   { id:8, nombre: "Campera Chicago Bulls", precio: 400000, imagen: "../img/8-CamperaBulls.jpg" , categoria: "camperas", descripcion: "Chicago Bulls Retro" ,stock: 11},
//   { id:9, nombre: "Remera Oversize", precio: 90000, imagen: "../img/9-RemeraOver.webp" , categoria: "remeras", descripcion: "Oversize Bear" ,stock: 11},
 

// ]



// const subirProductos = async () => {
//   const batch = writeBatch(db);
//   const productosRef = collection(db, "productos");

//   misProductos.forEach((producto) => {
//     const nuevoDoc = doc(productosRef); // crea un nuevo documento con un ID automático
//     batch.set(nuevoDoc, producto); // Agrega la operación de escritura al batch
//   });

//   try {
//     await batch.commit();
//     console.log("Productos subidos exitosamente");
//   } catch (error) {
//     console.log("Error subiendo productos:", error);
//   }
// };

// subirProductos();