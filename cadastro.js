
//dados
const email = document.getElementById("emailCadastro")
const usuario = document.getElementById("usuarioCadastro")
const genero = document.getElementById("generos")
const senha = document.getElementById("senhaCadastro")
const conSenha = document.getElementById("confirmar")
const nome = document.getElementById("nomeCadastro")
const CPF = document.getElementById("cpf")
const nascimento =  document.getElementById("date")
const cel = document.getElementById("celular")
const tel = document.getElementById("fixo")
const mae = document.getElementById("mae")
//Botões
const campos = document.querySelectorAll('.botao-campo input')
const botao = document.getElementById("pronto")
const form = document.getElementById("form")

const emailPadrao = /^[\w]+(\.[\w]+)?@(gmail|hotmail|outlook|email)\.com$/;
const senhaPadrao = /^[a-zA-Z]{8}$/;
const nomePadrao = /^[a-z A-Z]{6,80}$/
const usuarioPadrao = /^[a-z A-Z]{6}/


//Botão enviar
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    checkEmail()
    checkUsuario()
    checkSenha()
    compaSenha()
    checkNome()
    checkGenero()
    checkCPF()
    checkCel()
    checkTel()
    checkMae()
   
    const erros = document.querySelectorAll('.botao-campo.error')
    if (erros.length === 0){
        armazenamentoDeDados()
        form.reset()
    }

});








//Validação
function checkNome (){
    const nomeValue = nome.value
    if(!nomePadrao.test(nomeValue)){
        entradaErro(nome, "Nome inválido")
    }
}
function checkMae (){
    const maeValue = mae.value
    if (!nomePadrao.test(maeValue)){
        entradaErro(mae, "Nome inválido")
    }
}

function checkEmail(){
    const emailValue = email.value
    if (!emailPadrao.test(emailValue)){
        entradaErro(email, "Email invalido")
    }


}

function checkUsuario(){
    const usuarioValue = usuario.value
    if (!usuarioPadrao.test(usuarioValue)){
        entradaErro(usuario,"Usuário inválido")
    }

}
function checkSenha(){
    const senhaValue = senha.value

    if(!senhaPadrao.test(senhaValue)){
        entradaErro(senha, "Senha inválida")
    }
}
//Comparação das senhas
function compaSenha(){
    const conSenhaValue = conSenha.value
    const senhaValue = senha.value
    if (senhaValue != conSenhaValue || conSenhaValue ===""){
        entradaErro(conSenha, "As senhas devem ser iguais")
    }
}
function checkGenero(){
    const generoValue = genero.value
    if(generoValue ==""){
        entradaErro(genero, "Por favor, selecione seu gênero.")
        genero.style.backgroundColor= "#FF0000"
    }
}
    function checkCPF() {
        const cpfValue = CPF.value;
        const cpfSemPonto = cpfValue.replace(/\D/g, "")     
        if (cpfSemPonto.length < 11) {
            entradaErro(CPF, "CPF inválido");
        }
    }  
    function checkCel(){
        const celValue = cel.value;
        if (celValue ===""){
            entradaErro(cel, "Número errado")
        }
  } 
    function checkTel(){
    const telValue = tel.value;
        if (telValue ===""){
      entradaErro(tel, "Número errado")
  }
}
  

//erro do gênero
genero.addEventListener("change", () => {
    limparErro(genero);
    genero.style.backgroundColor = "#ffff00"; 
});


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
    formItem.className = "botao-campo error"
    //Rola até o erro
     entrada.scrollIntoView({ behavior: "smooth", block: "center" });
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
function buscarCEP() {
    const cep = document.getElementById("cep").value;
    const resultado = document.getElementById("resultado");

    if (!cep || cep.length !== 8 || isNaN(cep)) {
        resultado.innerHTML = "CEP inválido!";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                resultado.innerHTML = "CEP não encontrado!";
                return;
            }

            else {

                document.getElementById("cidade").value = data.localidade;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("rua").value = data.logradouro;
                // complemento é opcional, as vezes vem vazio
                document.getElementById("complemento").value = data.complemento || "";
            }

        })
        .catch(() => {
            resultado.innerHTML = "Erro ao buscar o CEP!";
            
        });
}


//Local Storage
    function armazenamentoDeDados(){
        const dadosUsuario = {
            email: email.value,
            nome: nome.value,
            usuario: usuario.value,
            senha: senha.value,
            genero: genero.value,
            CPF: CPF.value,
            nascimento: nascimento.value,
            cel: cel.value,
            tel: tel.value,
            mae: mae.value,


        }
        localStorage.setItem("usuariosCadastrados", JSON.stringify(dadosUsuario))
    }









