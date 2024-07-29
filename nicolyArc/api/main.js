function buscar(){
  //pegsar cep no input html
  let cep = document.getElementById('cep').value;
  // link da api
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  //buscar url e espera um arquivo json, em seguida armazena em dados
  fetch(url)
  .then(resp => resp.json())
  .then(dados => {
    document.getElementById('resultado').innerHTML = 
    `<strong>Cidade: </strong> ${dados.localidade} <br>
    <strong>Logradouro: </strong> ${dados.logradouro} <br>
    <strong>DDD: </strong> ${dados.ddd} <br>
    <strong>CEP: </strong> ${dados.cep} <br> 
    <strong>UF: </strong> ${dados.uf} <br>`;

    document.getElementById('painel').innerHTML =
     `<a id="mapa" href="https://www.google.com/maps/place/${dados.cep}" target="_blank">Ver localização no mapa <span></span></span><i class="fa-solid fa-map"></i></a>`

     document.getElementById('painel').style.height = '20vh'

   }).catch(error => alert('Deu errado' + error))
}
