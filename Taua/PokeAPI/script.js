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
        let hp = estatisticas.find(item => item.stat.name === "hp").base_stat;
        let ataque = estatisticas.find(item => item.stat.name === "attack").base_stat;
        let defesa = estatisticas.find(item => item.stat.name === "defense").base_stat;
        console.log(data);

        //pega o elemento tela no html
        var tela = document.getElementById("tela");
        //faz aparecer no elemento tela
        tela.innerHTML = 
        `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif">

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${data.id}.gif">

        
        <div class="numero"> ${data.id} </div>

        <div class="informacoes">
            <h2> Nome: ${data.name} </h2>
            <p>  Id: ${data.id} </p>
            <p>  Tipo: ${data.types.map(type => type.type.name)}</p>
            <p>  Habilidade: ${data.abilities.map(ability => ability.ability.name)} </p>
            <p>  Vida: ${hp} </p>
            <p>  Ataque: ${ataque} </p>
            <p>  Defesa: ${defesa} </p>
            <p>  Peso: ${data.weight}</p>
            <p>  Altura: ${data.height}</p>

        </div>
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