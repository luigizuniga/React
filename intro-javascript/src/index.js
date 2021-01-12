// Async y Await

// Async
// Peticion de tipo response, await espera a la promesa fetch termine


//  Await
//  La unica condicion para utilizarl Await es que debe estar dentro de una funcion Async
//
//  resp => respuesta de la data que nos retorna la API
//  data =>  respuesta JSON que regresa una promesa, por lo que debe a esperar a la respuesta para obtener la data

const getImage = async() => {
    try {
        const apiKey = 'F5lvX58U4STuXT8YOaCaabLVkjiBefJm';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        console.log(url);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getImage();