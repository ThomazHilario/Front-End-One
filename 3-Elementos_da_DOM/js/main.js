// Buttons
const buttons = document.querySelectorAll('.app__card-button')

// image
const app_image = document.querySelector('.app__image')

// title page
const titlePage = document.querySelector('.app__title')

// Audio
const audio = new Audio('sons/luna-rise-part-one.mp3')
audio.loop = true
audio.volume = 0.7 

// input alternar
const input = document.getElementById('alternar-musica')

// button
const button = document.getElementById('start-pause')

// divCard
const divCard = document.getElementById('timer')

//foco
let Minutos = 25
let Segundos = 0

divCard.innerHTML = `
    ${Minutos < 10 ? '0' + Minutos : Minutos} : ${Segundos < 10 ? '0' + Segundos : Segundos}
`

input.addEventListener('change', (e) => {
    
    if(e.target.checked){
        audio.play()
    } else{
        audio.pause()
    }
    

})

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonAttribute = button.dataset.contexto

        // Chamando a function removeClassActiveInButton
        removeClassActiveInButton()

        // Chamando a function addTextInTitlePage
        addTextInTitlePage(buttonAttribute)

        // Adicionando classe active ao button
        button.classList.add('active')

        // Alterando o valor do data attribute da tag html
        document.querySelector('html').dataset.contexto = buttonAttribute

        // alterando a imagem
        app_image.src = `imagens/${buttonAttribute}.png`

        
    })
})

// Removendo a class active
function removeClassActiveInButton(){
    // percorrendo os buttons e retirando a classe active delas.
    buttons.forEach(buttonClass => {
        if(buttonClass.className.includes('active')){
            buttonClass.classList.remove('active')
        }
    })
}

// Adicionando texto
function addTextInTitlePage(attribute){
    if(attribute === 'foco'){
        titlePage.innerHTML = `
        <h1 class="app__title">
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
        </h1>
        `
        Minutos = 25
        divCard.innerHTML = `
            ${Minutos < 10 ? '0' + Minutos : Minutos} : ${Segundos < 10 ? '0' + Segundos : Segundos}
        `
    } else if(attribute === 'descanso-curto'){
        titlePage.innerHTML = `
        <h1 class="app__title">
        Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
        </h1>
        `
        Minutos = 5
        divCard.innerHTML = `
            ${Minutos < 10 ? '0' + Minutos : Minutos} : ${Segundos < 10 ? '0' + Segundos : Segundos}
        `
    } else if(attribute === 'descanso-longo'){
        titlePage.innerHTML = `
        <h1 class="app__title">
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
        </h1>
        `
        Minutos = 15
        divCard.innerHTML = `
            ${Minutos < 10 ? '0' + Minutos : Minutos} : ${Segundos < 10 ? '0' + Segundos : Segundos}
        `
    }
}
// intervalo de descanso
let pauseBreak = true

// pause timer
let pause = false

function contagem_regressiva(){

    setInterval(() => {
        if(pause === false){
            if(Minutos == 0 && Segundos == 0 && pauseBreak == true){
                Minutos = 5
                pauseBreak = false
            }

            if(Minutos == 0 && Segundos == 0 && pauseBreak == false){
                Minutos = 25
                pauseBreak = true
            }

            if(Segundos < 1){
                Minutos -= 1
                Segundos = 60
            } 

            if(Minutos === 0 && Segundos === 6){
                new Audio('sons/beep.mp3').play()
            }
        
            Segundos -= 1
    
            divCard.innerHTML = `
            ${Minutos < 10 ? '0' + Minutos : Minutos} : ${Segundos < 10 ? '0' + Segundos : Segundos}
            `
        }
    }, 1000)
}

button.addEventListener('click', () => {
    if(button.lastElementChild.textContent == 'Começar'){
        contagem_regressiva()
        button.lastElementChild.textContent = 'Pausar'
        new Audio('sons/play.wav').play()
    } else if(button.lastElementChild.textContent == 'Pausar'){
        pause = true
        button.lastElementChild.textContent = 'Retornar'
        new Audio('sons/pause.mp3').play()
    }else {
        pause = false
        button.lastElementChild.textContent = 'Pausar'
        new Audio('sons/play.wav').play()
    }
})