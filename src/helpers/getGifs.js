


export const getData = async (categoria) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI( categoria )}&limit=10&api_key=0j8llTrdK9ysZT9wq6NN2HSLk5f9gB5G`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(imagen => {
        return {
            id: imagen.id,
            title: imagen.title,
            imagen: imagen.images?.downsized_medium.url
        }
    })
    
    return gifs;
}