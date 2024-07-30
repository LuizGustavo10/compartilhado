function buscar(){
let entrada = document.getElementById("entrada").value.toLowerCase();
let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;

//buscar url - response é a resposta, que espera o retorno de um arquivo json

fetch(url)
.then(response =>response.json())
.then(dados => {
alert(dados.name);
//pega o elemento tela no html
let tela  = document.getElementById("tela");

//faz aparecer no elemento tela
tela.innerHTML =

`
<img src="${dados.sprites.front_default}">
<img src="${dados.sprites.back_default}">
<h2>nome: ${dados.name} </h2>
<p> id: ${dados.id}</p>

`;
});


}