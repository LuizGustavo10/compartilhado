let contador = 0;



function buscar() {
    let entrada = document.getElementById("entrada").value.toLowerCase();
    //se o tamanho 
    if(entrada.length < 1){
        entrada = contador;
    }
    let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;

    //buscar url - response é a resposta, que espera o retorno de um arquivo json
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //variável que pega todas as estastisticas
        let estatisticas = data.stats;
        //obtém individualmente dentro de estatisticas o HP, ataque e defesa
        let hp = estatisticas.find(stat => stat.stat.name === "hp").base_stat;
        let ataque = estatisticas.find(stat => stat.stat.name === "attack").base_stat;
        let defesa = estatisticas.find(stat => stat.stat.name === "defense").base_stat;

        //pega o elemento tela no html
        var tela = document.getElementById("tela");
        //faz aparecer no elemento tela
        tela.innerHTML = 
        `
        <img src="${data.sprites.front_default}">
        <img src="${data.sprites.back_default}">
        <h2> Nome: ${data.name} </h2>
        <p>  Id: ${data.id} </p>
        <p>  Tipo: ${data.types.map(type => type.type.name)}</p>
        <p>  Habilidade: ${data.abilities.map(ability => ability.ability.name)} </p>
        <p>  Vida: ${hp} </p>
        <p>  Ataque: ${ataque} </p>
        <p>  Defesa: ${defesa} </p>
        `;
        contador = data.id;
        //Limpando o campo de entrada
        document.getElementById("entrada").value="";
    }).catch(error => {
        alert("Pokémon não encontrado! " +error)
    });
}

function avancar() {
    contador = contador + 1;
    buscar();
}

function voltar() {
    contador -=1;
    buscar();
}