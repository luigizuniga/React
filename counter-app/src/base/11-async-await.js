// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

// Async nos retorna una promesa con la url de la imagen
export const getImagen = async() => {

    try {
        const apiKey = 'F5lvX58U4STuXT8YOaCaabLVkjiBefJm';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        return url;
    } catch (error) {
        return 'No existe';
    }
}