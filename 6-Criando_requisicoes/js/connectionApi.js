export async function loadVideos(){
    try {
        const response = await fetch('http://localhost:3000/videos')
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}