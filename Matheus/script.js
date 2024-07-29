function buscar() {
 
    // pegar o CEP no imput do html
  let cep = document.getElementById('cep').value;
  //link api
  let url = 'https://viacep.com.br/ws/'+cep+'/json/'
// buscar url e espera um arquivo json, em seguida armazena em dados 
  fetch(url)
  .then(response=> response.json())
  .then(dados => {
    document.getElementById('resultado').innerHTML = 
    `<strong> Cidade:   ${dados.localidade} <br> </strong>
    <strong> Logradouro:  ${dados.logradouro}<br>  </strong>
    <strong> DDD:  ${dados.ddd}<br>  </strong>
    <strong> CEP:  ${dados.cep}<br>  </strong>
    <strong> Bairro:  ${dados.bairro}<br>  </strong>
    <strong> Estado:   ${dados.uf}<br>  </strong>
    <strong> Ibge:   ${dados.ibge}<br>  </strong>
   
    `;

  }).catch(error = alert ('deu errado aí ' + error))
}

function buscarmapa(){
let cep = document.getElementById("cep").value;
var mapa = "https://www.google.com/maps/place/"+cep;
window.open(mapa, '_blank');




}