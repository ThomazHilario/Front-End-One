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