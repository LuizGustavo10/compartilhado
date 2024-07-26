function buscar(){
    let cep = document.getElementById('cep').value;
    //link da API
    let url = 'https://viacep.com.br/ws/'+cep+'/json/';

fetch(url)
.then(response => {0}).catch(error => alert ('deu errado! ' + error))

}