import isCPF from "./valida-cpf.js"

const allInputsForm = document.querySelectorAll('[required]')

// percorrendo os inputs
allInputsForm.forEach(input => {
    input.addEventListener('blur', () => verifyInputValue(input))
})

// verifyInputValue
function verifyInputValue(input){
    if(input.name == 'cpf' && input.value.length >= 10){
        isCPF(input.value)
    }
}