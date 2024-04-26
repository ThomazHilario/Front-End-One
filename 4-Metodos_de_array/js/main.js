// buttons
const buttons = document.querySelectorAll('.btn')
// section 
const livros_disponiveis = document.querySelector('#valor_total_livros_disponiveis')

// livros
let livros = []

// Percorrendo buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.value !== ''){
            const booksFilter = livros.filter(livro => livro.categoria.toLowerCase() === button.value)

            livros_disponiveis.innerHTML = ''

            loadBooks(booksFilter)
        } else{
            if(button.classList[1].includes('ordenacao')){
                let livrosOrder = livros

                livrosOrder.sort((a,b) => a.preco - b.preco)

                livros_disponiveis.innerHTML = ''

                loadBooks(livrosOrder)
            }

            if(button.classList[1].includes('disponiveis')){
                const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)

                // valor total dos livros
                const totalBookValues = livrosDisponiveis.map((item) => item.preco - (item.preco * 0.3)).reduce((acc, item) => acc += item).toFixed(2)

                livros_disponiveis.innerHTML = `<div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">${totalBookValues.replace('.',',')}</span></p>
                </div>`

                loadBooks(livrosDisponiveis)

            }
        }
    })
})

// Buscando livros em uma API
async function seachBooks(){
    try {
        const response = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')

        const data = await response.json()

        livros = data

        loadBooks(livros)

    } catch (error) {
        console.log(error)
    }
}

// Caregando os livros na section
function loadBooks(array){
    const dataModified = array.map(item => {
        return(
            `
                <div class="livro">
                    <img class="${item.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'}" src="${item.imagem}" alt="${item.alt}" />

                    <h2 class="livro__titulo">
                        ${item.titulo}
                    </h2>

                    <p class="livro__descricao">${item.autor}</p>
                    <p class="livro__preco" id="preco">R$${(item.preco - item.preco * 0.3).toFixed(2)}</p>

                    <div class="tags">
                        <span class="tag">${item.categoria}</span>
                    </div>
                </div>    
            `
        )
    })

    // Valores em string do total de livros
    const dataString = dataModified.join()
    
    document.getElementById('livros').innerHTML = dataString
}