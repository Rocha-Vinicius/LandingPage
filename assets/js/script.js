let nome = window.document.exampleFormControlInput1("#nome")
let email = document.querySelector("#email")
let nomeOk = false
let emailOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){

    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOK == true){
    alert ("Formulário enviado com sucesso!")
} else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
var forms = document.getElementsByClassName('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);