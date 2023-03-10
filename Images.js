export const getImagesFromApi = async () => {
    const res = await fetch('https://pixabay.com/api/?key=34283384-a5caa5f19af87c635474d3ab9&q=yellow+flowers&image_type=photo')
    const data = await res.json()
    const urls = data.hits
        .map(hit => hit.userImageURL)
        .filter(url => url !== '')
    return urls
}
