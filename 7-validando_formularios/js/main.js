import isCPF from "./valida-cpf.js"

const allInputsForm = document.querySelectorAll('[required]')

// percorrendo os inputs
allInputsForm.forEach(input => {
    input.addEventListener('blur', () => verifyInputValue(input))
})

// verifyInputValue
function verifyInputValue(input){
    // mensagem do span
    let mensagem = ""

    if(input.name == 'cpf' && input.value.length >= 11){
        isCPF(input)
    }

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagens[input.name][erro]
        }
    })

    const span = input.parentNode.querySelector('.mensagem-erro')
    const validadorDoInput = input.checkValidity()


    if(!validadorDoInput){
        span.textContent = mensagem
    }else{
        span.textContent = ""
    }

}
// tipos de erro
const tiposDeErro = [
    'valueMissing', 'patternMismatch', 'tooShort', 'customError', 
]
// mensagens de erro
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}