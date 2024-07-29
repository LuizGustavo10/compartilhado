
function buscar(){
    let mapa = '';
    //pegar o cep no input do html
    let cep = document.getElementById('cep').value;
    //link da API
    let url = 'https://viacep.com.br/ws/'+cep+'/json/';
    //buscar url e espera um arquivo json, em seguida armazena em dados
    fetch(url)
    .then(response => response.json())
    .then(dados => {
        document.getElementById('resultado').innerHTML =
        `<strong> Cidade: </strong> ${dados.localidade} <br>
         <strong> Logradouro: </strong> ${dados.logradouro} <br>
         <strong> DDD: </strong> ${dados.ddd} <br>
         <strong> bairro: </strong> ${dados.bairro} <br>
          <strong> estado: </strong> ${dados.uf} <br>
           <strong> ibge: </strong> ${dados.ibge} <br> 

                
         ` ;
             
    }).catch(error => alert('Deu errado! ' + error))

}

      function buscarmapa(){
        let cep = document.getElementById('cep').value;
        var mapa = "https://www.google.com/maps/place/"+cep;
        window.open(mapa, '_blank');
      }
    
 
