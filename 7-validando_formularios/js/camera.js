const camera_botao = document.querySelector('[data-video-botao]')
const botao_tirar_foto = document.querySelector('[data-tirar-foto]')
const canvas = document.querySelector('[data-video-canvas]')
const mensagem = document.querySelector('[data-mensagem]')
const video_camera = document.querySelector('[data-video]')
const camera = document.querySelector('[data-camera]')
const botaoEnviar = document.querySelector('[data-enviar]')


let imagemUrl = ''

camera_botao.addEventListener('click', activeCamera)

async function activeCamera(){
    try {
        camera_botao.style.display = 'none'
        camera.style.display = 'block'
        const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false})     

        video_camera.srcObject = iniciarVideo
    } catch (error) {
        console.log(error)
    }
}

botao_tirar_foto.addEventListener('click', () => {
    canvas.getContext('2d').drawImage(video_camera, 0, 0, canvas.clientWidth, canvas.clientHeight)

    imagemUrl = canvas.toDataURL('image/jpeg')

    camera.style.display = 'none'
    mensagem.style.display = 'block'
})

botaoEnviar.addEventListener('click', () => {
    const dadosArmazenados = JSON.parse(localStorage.getItem('cadastro'))

    dadosArmazenados.imagem = imagemUrl

    localStorage.setItem('cadastro', JSON.stringify(dadosArmazenados))

    window.location.href = './abrir-conta-form3.html'
})