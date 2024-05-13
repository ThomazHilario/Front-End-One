export default function isCPF(input){
    const validation = new RegExp(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)
    
    if(validation.test(input.value)){
       const cpf = input.value.replace(/\.|-/g, "")
       
       if(!validateNumberOneInCpf(cpf) || !validadeNumberTwoInCpf(cpf)){
           input.setCustomValidity("Cpf inválido!!") 
       }

    }
}

// validando o primeiro digito do cpf
function validateNumberOneInCpf(cpf){
    const nineWordsInCpf = cpf.substring(0,9).split('')
    const oneDigitInCpf = cpf.substring(9,10)
    
    // variavel soma
    let soma = 0

    for(let i = 0; i < nineWordsInCpf.length; i++){
        let multiplicador = i + 1
        soma += nineWordsInCpf[i] * multiplicador    
    }

    let resto = soma % 11

    return resto === parseInt(oneDigitInCpf)
}

function validadeNumberTwoInCpf(cpf){
    const nineWordsInCpf = cpf.substring(0,9).split('')
    const twoDigit = cpf.substring(10,11)

    // variavel soma
    let soma = 0

    // percorrendo o cpf
    for(let i = 0; i < nineWordsInCpf.length; i++){
        const multiplicador = nineWordsInCpf.length - i

        soma += nineWordsInCpf[i] * multiplicador
    }

    const resto = soma % 11

    return resto === parseInt(twoDigit)
}