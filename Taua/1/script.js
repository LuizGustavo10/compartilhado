function buscar() {
    // voce esta procurando o 'cep' e quer o valor
    let cep = document.getElementById('cep').value;
    // link da API
    let url ='https://viacep.com.br/ws/'+cep+'/json/';

    // buscar url e espera e espera um arquivo json, em seguida armazena dados
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        document.getElementById('resultado').innerHTML =
        `<strong> Cidade: </strong> ${data.localidade}
         <br>
         <strong> Logradouro: </strong> ${data.logradouro}
         <br>
         <strong> UF: </strong> ${data.uf}
         <br>
         <strong> Cód. IBGE: </strong> ${data.igbe}
         <br>
         <strong> DD: </strong> ${data.ddd}
         `;
     }).catch(error => alert('Erro inesperado ' + error))
}