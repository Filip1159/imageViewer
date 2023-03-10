export const getImagesFromApi = async () => {
    const res = await fetch('https://pixabay.com/api/?key=34283384-a5caa5f19af87c635474d3ab9&q=yellow+flowers&min_width=1080&min_height=1920&per_page=100')
    const data = await res.json()
    const urls = data.hits
        .map(hit => hit.userImageURL)
        .filter(url => url !== '')
    return urls
}
