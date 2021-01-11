// Desestructuracion de Objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'S'
};

const activarHeroe = ({ nombre, edad, clave, rango = 'S/I' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 1.56,
            lng: -12.3
        }
    };
};

const { nombreClave, anios, latlng: { lat, lng } } = activarHeroe(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

//Desestructuracion (Extraccion) de Arreglos por medio de una funcion

const avengers = ['Thor', 'Ironman', 'Spiderman'];
const extraerAvengers = ([thor, ironman, spiderman]) => {
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
}
extraerAvengers(avengers);