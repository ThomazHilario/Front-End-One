import { loadVideos } from "./connectionApi.js"

// tag ul
const listaAtual = document.querySelector('.videos__container')

async function loadLista(){
    try {
        const lista = await loadVideos()

        lista.forEach(item => {
            listaAtual.innerHTML += exibirVideos(item.titulo,item.descricao,item.url,item.imagem)
        });

    } catch (error) {
        console.log(error)
    }
}
loadLista()

function exibirVideos(title, descricao, url, imagem){
    const li = `
        <li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
            title="${title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${title}</h3>
                <p>${descricao}</p>
            </div>
        </li>
    `

    return li
}
