const usuarioCadastrado = {
    email: "email@exemplo.com",
    senha: "senhaa",
};
const email = document.getElementById("emailCadastro")
const usuario = document.getElementById("usuarioCadastro")
const nome = document.getElementById("senhaCadastro")
const form = document.getElementById("form")

const botao = document.getElementById("pronto")
const emailPadrao = /^[\w]+(\.[\w]+)?@(gmail|hotmail|outlook|email)\.com$/;
const senhaPadrao = /^[a-zA-Z]{6,}$/;


//Botão enviar
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checkEmail();


});




// Limpar usuário
function limparUsuario() {
    document.getElementById('usuario').value = '';
}

// Limpar senha
function limparSenha() {
    document.getElementById('senha').value = '';
}


function checkEmail(){
    const emailValue = email.value
    if (!emailPadrao.test(emailValue)){
        entradaErro(email, "Email invalido")
    }


}
function entradaErro(entrada, mensagem){
    const formItem = entrada.parentElement
    const mensagemTexto = formItem.querySelector('p')

    mensagemTexto.innerText = mensagem

    console.log("Mostrando erro para:", entrada.id)

    formItem.className = "botao-campo error"
}

function checkUsuario(){
    const usuarioValue = usuario.value

    if 
}
