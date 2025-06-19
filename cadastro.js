
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
const cep = document.getElementById("cep");
//Botões
const campos = document.querySelectorAll('.botao-campo input')
const botao = document.getElementById("pronto")
const form = document.getElementById("form")
//Padrões
const emailPadrao = /^[\w]+(\.[\w]+)?@(gmail|hotmail|outlook|email)\.com$/;
const senhaPadrao = /^[a-zA-Z]{8}$/;
const nomePadrao = /^[a-z A-Z]{6,80}$/
const usuarioPadrao = /^[a-z A-Z]{6}/
const cepPadrao = /^[0-9]{8}$/
//Endereço




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
    checkCEP()
    const erros = document.querySelectorAll('.botao-campo.error')
    if (erros.length === 0){
        armazenamentoDeDados()
        alert("Usuário Cadastrado com sucesso")
        window.location.href = "login.html"
        form.reset()
    }

});

cep.addEventListener('blur', (evento) =>{
    buscaCep()
})






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
function checkCEP (){
    const cepValor = cep.value
    if (cepValor ===""){
        entradaErro(cep, "CEP inválido")
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
function buscaCep(){
    const cepValue = document.getElementById("cep").value.replace(/\D/g, "")
    let linkCep =  `https://viacep.com.br/ws/${cepValue}/json/`
     if (cepValue.length !== 8) {
        entradaErro(document.getElementById("cep"), "CEP deve ter 8 dígitos");
        return;
    }
    fetch(linkCep)
    .then(response => response.json())
    .then(data => {
        if (data.erro){
            entradaErro(document.getElementById("cep"), "CEP não encontrado")
        }
        document.getElementById("rua").value = data.logradouro
        document.getElementById("bairro").value = data.bairro
        document.getElementById("cidade").value = data.localidade
        document.getElementById("estado").value = data.uf
    })
    .catch(err =>{
        entradaErro(document.getElementById("cep"), "erro ao buscar cep")
        console.error(err)
    })}

    
    
 



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









