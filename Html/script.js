function ShowData(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if(senha.length<8){
        alert("A senha está pequena demais, deve ter no mínimo 8 caracteres.")
    }

    console.log("Olá " + nome + ", sua senha é " + senha);
}