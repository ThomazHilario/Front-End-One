export async function loadVideos(){
    try {
        const response = await fetch('http://localhost:3000/videos')
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}

async function sendvideo(titulo, url, imagem){
    try {
        const response = await fetch('http://localhost:3000/videos', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        })

        return response.json()
    } catch (error) {
        console.log(error)
    }
}