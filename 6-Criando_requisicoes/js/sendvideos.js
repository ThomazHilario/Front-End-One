// input url
const urlInput = document.getElementById('url')

// input titulo
const tituloInput = document.getElementById('titulo')

// input imagem
const imagemInput = document.getElementById('imagem')

// formulario
const button = document.querySelector('.formulario__botao')

async function sendVideos(titulo, descricao, imagem, url){
    try {
        const response = await fetch('http://localhost:3000/videos', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titulo,
                descricao:`${descricao} mil Visualizações`,
                url,
                imagem
            })
        })

        response.json()
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault()

    if(imagemInput.value !== '' && urlInput.value !== '' && tituloInput.value !== ''){
        sendVideos(tituloInput.value, '3', imagemInput.value, urlInput.value)
        console.log('Video enviado')
    }
})