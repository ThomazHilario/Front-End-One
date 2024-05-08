export default function isCPF(value){
    const validation = new RegExp(/^(?!(\d)\1{2}\.\1{3}\.\1{3}-\1{2})(?!123\.456\.789-10)\d{3}\.\d{3}\.\d{3}-\d{2}$/)
    
    if(validation.test(value)){
       const cpf = value.replace(/\.|-/g, "")
       console.log(cpf) 
    }
}