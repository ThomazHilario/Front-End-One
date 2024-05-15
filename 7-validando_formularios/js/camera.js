const camera_botao = document.querySelector('[data-video-botao]')
const video_camera = document.querySelector('[data-video]')
const camera = document.querySelector('[data-camera]')

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