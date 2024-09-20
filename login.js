// Dados de login (usuário e senha)
const validUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Adicione mais usuários e senhas conforme necessário
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Verifica se o usuário e senha são válidos
    const isValidUser = validUsers.some(user => user.username === username && user.password === password);
    
    if (isValidUser) {
        // Redireciona para o gerador de cartões
        window.location.href = 'cards.html'; // Certifique-se de que o arquivo cards.html está no mesmo diretório
    } else {
        // Mostra mensagem de erro
        errorMessage.style.display = 'block';
    }
}
