let contador = 0;

function buscar(){

    let entrada = document.getElementById("entrada").value.toLowerCase();
    //se o tamanho da entrada for menor que 1 caracter
    if(entrada.length < 1){
        entrada = contador;
    }
    let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;

    //buscar url - response é a resposta, que espera o retorno de um arquivo json
    fetch(url)
    .then(response =>response.json())
    .then(pokemon_dadosAbilities => {
 console.log(pokemon_dadosAbilities)
        //variável que pega todas as estatisticas
        let estatisticas = pokemon_dadosAbilities.stats;
        //obtém individualmente dentro de estatisticas o HP, ataque e defesa
        let hp = estatisticas.find(item => item.stat.name === "hp").base_stat;
        let ataque = estatisticas.find(item => item.stat.name === "attack").base_stat;
        let defesa = estatisticas.find(item => item.stat.name === "defense").base_stat;

        //pega o elemento tela no html
       var tela = document.getElementById("tela");
       //faz aparecer no elemento tela
       tela.innerHTML = 
       `<img src="${pokemon_dadosAbilities.sprites.front_default}"> 
        <img src="${pokemon_dadosAbilities.sprites.back_default}">
        <h2> Nome: ${pokemon_dadosAbilities.name} </h2>
        <p>  Id: ${pokemon_dadosAbilities.id} </p>
        <p>  Tipo: ${pokemon_dadosAbilities.types.map(type => type.type.name)} </p>
        <p>  Habilidades: ${pokemon_dadosAbilities.abilities.map(item => item.ability.name)} </p>
        <p>  Habilidades: ${pokemon_dadosAbilities.abilities.map(item => item.ability.name)} </p>
        <p>  Vida: ${hp} </p>
        <p>  Ataque: ${ataque} </p>
        <p>  Defesa: ${defesa} </p>
       `;
        contador = pokemon_dadosAbilities.id;
        //limpar campo de entrada
        document.getElementById("entrada").value="";
    }).catch(error => {
        //tela.innerHTML = '<p> Porkémon não encontrado! </p>';
        alert("Algo deu errado! " + error);
    });
}


function avancar(){
    contador = contador + 1;
    buscar();
}
function voltar(){
    contador-=1;
    buscar();

}
