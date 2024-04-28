// body
const body = document.querySelector('body')

// cep
const cepInput = document.getElementById('cep')
const enderecoInput = document.getElementById('endereco')
const numeroInput = document.getElementById('numero')
const complementoInput = document.getElementById('complemento')
const bairroInput = document.getElementById('bairro')
const cidadeInput = document.getElementById('cidade')
const estadoSelect = document.getElementById('estado')

// cep regex
const cepValidation = new RegExp(/\b\d{5}-\d{3}\b/)

async function seachData(cep){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()

        // valor da cidade
        cidadeInput.value = data.localidade

        // valor do estado
        estadoSelect.value = data.uf !== undefined ? data.uf.toUpperCase() : ''

        // valor do endereco
        enderecoInput.value = data.logradouro

        // valor do bairro
        bairroInput.value = data.bairro !== undefined ? data.bairro : ''

        // valor do complemento
        complementoInput.value = data.complemento !== undefined ? data.complemento : ''
    } catch (e) {
        console.log(e)
    }
}


body.addEventListener('click', () => {
    if(cepInput.value !== '' && !cepInput.value.includes('-')){
        const cepUser = cepInput.value.split('')
        cepUser[5] = '-'
        cepUser.push(0)
        cepInput.value = cepUser.join('')
    }

    if(cepValidation.test(cepInput.value) && cidadeInput.value == ''){
        seachData(cepInput.value)
    }
})

cepInput.addEventListener('change', (e) => {
    if(e.target.value.length < 9){
        // valor da cidade
        cidadeInput.value = ''

        // valor do estado
        estadoSelect.value = ''

        // valor do endereco
        enderecoInput.value = ''

        // valor do bairro
        bairroInput.value = ''

        // valor do complemento
        complementoInput.value = ''
    }
})