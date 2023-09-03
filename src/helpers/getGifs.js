
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=YrH78WAFIv11Iv3sOanMVXqDNWluYV3u&q=${category}&limit=10`

    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(val => { 
        return {
            id: val.id,
            title: val.title,
            url: val.images.downsized_medium.url

        }
    })

    return gifs
}