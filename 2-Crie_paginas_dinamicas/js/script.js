function playSound(src){
    const audio = new Audio(src);
    audio.play()
}

document.querySelectorAll('.tecla').forEach(element => {
    const idSom = `som_${element.className.split(' ')[1]}`

    element.addEventListener('click', () => {
        playSound(document.getElementById(idSom).src)
    })
})

const somObject = {
    'q':'tecla_pom',
    'w':'tecla_clap',
    'e':'tecla_tim',
    'a':'tecla_puff',
    's':'tecla_splash',
    'd':'tecla_toim',
    'z':'tecla_psh',
    'x':'tecla_tic',
    'c':'tecla_tom'
}

window.addEventListener('keydown', (e) => {
    if(somObject[e.key]){
        document.querySelector(`.${somObject[e.key]}`).classList.add('ativa')
        playSound(document.getElementById(`som_${somObject[e.key]}`).src)
        setTimeout(() => {
            document.querySelector(`.${somObject[e.key]}`).classList.remove('ativa')
        },100)
    }
})