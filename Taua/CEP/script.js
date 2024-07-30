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
        `<strong> Cidade: </strong> ${data.localidade}<br>
         <strong> Logradouro: </strong> ${data.logradouro}<br>
         <strong> CEP: </strong> ${data.cep}<br>
         <strong> UF: </strong> ${data.uf}<br>
         <strong> Cód. IBGE: </strong> ${data.igbe}<br>
         <strong> DD: </strong> ${data.ddd}<br>
        <img class="painel-imagem" width="280px" src="https://cdn.pixabay.com/photo/2024/07/06/04/27/map-8875911_640.png" alt=""> <br>
        <a class="painel-ancora" href="https://www.google.com.br/maps/place/${data.cep}" target="_blank">Maps <i class="fa-solid fa-location-dot"></i></a> <br>
         `;
     }).catch(error => alert('Erro inesperado ' + error))
}
