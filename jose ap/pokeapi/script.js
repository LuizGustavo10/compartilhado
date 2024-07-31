
let contador = 0;

 function buscar() {

    let entrada = document.getElementById("entrada").value.toLowerCase();
    //se o tamanho da entrada for menor que 1 caracter
if(entrada.length < 1 ){
    entrada = contador;
}
    let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;

    //buscar url - response e a resposta ,  espera e retorna  de um arquivo json
    fetch(url)
        .then(response => response.json())
        .then(dados => {
//pega o elemento tela no html 
 let tela = document.getElementById("tela");
 //faz parecer no elemento tela
 tela.innerHTML =

`
<img src="${dados.sprites.front_default}">
<img src="${dados.sprites.back_default}">
<h2>nome: ${dados.name}</h2>
<p> id: ${dados.id} </p>
<p> tipo: ${dados.types.map(type => type.type.name)} </p>
<p> Habilidades: ${dados.abilities.map(ability => ability.ability.name)} <p>


` ;
contador = dados.id;
//limpar campo de entrada
document.getElementById("entrada").value="";
        });
    }

    function avancar(){
contador = contador +1;
buscar();

    }

    function voltar(){
    contador-=1;
    buscar();
}