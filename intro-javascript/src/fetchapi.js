/**
    FETCH API
*/
import giphyLocal from './data/giphy';

const apiKey = 'F5lvX58U4STuXT8YOaCaabLVkjiBefJm';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    }).catch(console.warn);

console.log(giphyLocal);