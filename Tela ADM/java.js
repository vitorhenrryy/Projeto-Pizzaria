function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Acesso Permitido')
    }else{
        alert("Usuário ou senha incorreta")
    }
}