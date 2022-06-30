var nome = window.document.getElementById("nome")
var nomeOk = false
var email = document.querySelector("#email")
var emailOk = false
var assunto = document.querySelector("#assunto")
var assuntoOk = false

function validarNome() {
    let validaNome = document.querySelector("#validaNome")

    if (nome.value.length < 2) {
        validaNome.innerHTML = 'Nome inválido'
        validaNome.style.color = 'red'
        nomeOk = false
    }

    else {
        validaNome.innerHTML = 'Nome válido!'
        validaNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
    let validaEmail = document.querySelector('#validaEmail')
   
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0) {
        validaEmail.innerHTML = 'email válido'
        validaEmail.style.color = 'green'
        emailOk = true

    } else {
        validaEmail.innerHTML = 'email inválido!'
        validaEmail.style.color = 'red'
        emailOk = false

    }
}

function validarAssunto() { 
    let validaAssunto = document.querySelector('#validaAssunto')
   
    if( assunto.value.length >= 70){
    validaAssunto.innerHTML= 'Limite de caracteres excedido'
    validaAssunto.style.color ='red' 
    validaAssunto.style.display = 'block'
    
    }

else {
    
    validaAssunto.style.display = 'none'
    
}

}

function Enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert('Preencha o campo corretamente')
    }
}