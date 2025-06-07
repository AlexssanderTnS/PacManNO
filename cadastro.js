const usuarioCadastrado = {
    email: "email@exemplo.com",
    senha: "senhaa",
};
const email = document.getElementById("emailCadastro")
const usuario = document.getElementById("usuarioCadastro")
const nome = document.getElementById("senhaCadastro")
const form = document.getElementById("form")
const botao = document.getElementById("pronto")
const campos = document.querySelectorAll('.botao-campo input')


const emailPadrao = /^[\w]+(\.[\w]+)?@(gmail|hotmail|outlook|email)\.com$/;
const senhaPadrao = /^[a-zA-Z]{6,}$/;
const usuarioPadrao = /^[a-z A-Z]{6,80}]/


//Botão enviar
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checkEmail();
});








//Validação
function checkEmail(){
    const emailValue = email.value
    if (!emailPadrao.test(emailValue)){
        entradaErro(email, "Email invalido")
    }


}

function checkUsuario(){
    const usuarioValue = usuario.value

    
}

// Limpar senha
function limparSenha() {
    document.getElementById('senha').value = '';
}
// Limpar usuário
function limparUsuario() {
    document.getElementById('usuario').value = '';
}

//function que mostra a mensagem de erro
function entradaErro(entrada, mensagem){
    const formItem = entrada.parentElement
    const mensagemTexto = formItem.querySelector('p')

    mensagemTexto.innerText = mensagem

    console.log("Mostrando erro para:", entrada.id)

    formItem.className = "botao-campo error"
}


//function para tirar a mensagem de erro
function limparErro(entrada){
    const formItem = entrada.parentElement;
    const mensagemTexto = formItem.querySelector('p');

    mensagemTexto.innerText =""; //vai limpar a mensagem
    formItem.className = "botao-campo"; // vai remover a classe erro
}
//Loop que limpa todos os inputs
campos.forEach (campo => {
    campo.addEventListener('input', () =>{
        limparErro(campo)
    })
})
