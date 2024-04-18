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
    'q':'som_tecla_pom',
    'w':'som_tecla_clap',
    'e':'som_tecla_tim',
    'a':'som_tecla_puff',
    's':'som_tecla_splash',
    'd':'som_tecla_toim',
    'z':'som_tecla_psh',
    'x':'som_tecla_tic',
    'c':'som_tecla_tom'
}

window.addEventListener('keydown', (e) => {
    if(somObject[e.key]){
        playSound(document.getElementById(somObject[e.key]).src)
    }
})