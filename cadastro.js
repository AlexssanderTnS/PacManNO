const usuarioCadastrado = {
    email: "email@exemplo.com",
    senha: "senhaa",
};

const emailPadrao = /^[\w]+(\.[\w]+)?@(gmail|hotmail|outlook|email)\.com$/;
const senhaPadrao = /^[a-zA-Z]{6,}$/;

// Limpar usuário
function limparUsuario() {
    document.getElementById('usuario').value = '';
}

// Limpar senha
function limparSenha() {
    document.getElementById('senha').value = '';
}


