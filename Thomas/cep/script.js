function buscar(){
    // pegar o cep no input do html 
    let cep = document.getElementById('cep').value;
    // link da api
    let url = 'https://viacep.com.br/ws/'+cep+'/json/';
    fetch(url)
    .then(response => response.json())
    .then(dados => {
        document.getElementById('resultado').innerHTML =
        `<strong> CEP: </strong> ${dados.cep} <br>
        <strong> Cidade: </strong> ${dados.localidade} <br>
        <strong> Logradouro: </strong> ${dados.logradouro} <BR>
        <strong> DDD: </strong> ${dados.ddd} <br>
        <strong> UF: </strong> ${dados.uf} `;
    }).catch(error => alert('deu errado!' + error))
}