let txtnome = document.querySelector('#txtnome')
let txtemail = document.querySelector('#txtemail')
let txtassunto = document.querySelector('#txtassunto')

function validaNome() {
    let txtnome = document.querySelector('#txtnome')

    if(nome.value.length < 3) {
        txtnome.innerHTML = 'Nome inválido'
        txtnome.style.color  = 'red'
    }else{
        txtnome.innerHTML = 'Nome válido'
        txtnome.style.color = 'green'
    }   
}

function validaEmail() {
    let txtemail = document.querySelector ('#txtemail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtemail.innerHTML = 'Email inválido'
        txtemail.style.color = 'red'
    }else{
        txtemail.innerHTML = 'Email válido'
        txtemail.style.color = 'green'
    }
}

function validaAssunto() {
    let txtassunto = document.querySelector('#txtassunto')

    if(assunto.value.length >= 300) {
        txtassunto.innerHTML = 'Texto é  muito grande'
        txtassunto.style.color='red'
    }else{
        txtassunto.innerHTML = 'Texto precisar ter no máximo 300 caracteres'
        txtassunto.style.color ='green'
    }
}