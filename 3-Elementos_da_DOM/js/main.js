// Buttons
const buttons = document.querySelectorAll('.app__card-button')

// image
const app_image = document.querySelector('.app__image')

// title page
const titlePage = document.querySelector('.app__title')

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
    } else if(attribute === 'descanso-curto'){
        titlePage.innerHTML = `
        <h1 class="app__title">
        Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
        </h1>
        `
    } else if(attribute === 'descanso-longo'){
        titlePage.innerHTML = `
        <h1 class="app__title">
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
        </h1>
        `
    }
}