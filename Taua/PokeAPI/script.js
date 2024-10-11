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
            <p>  <b> <i class="fa-solid fa-tag"></i> Nome: </b> ${data.name} </p>
            <p>  <b> <i class="fa-solid fa-sun"></i> Tipo: </b> ${data.types.map(type => type.type.name)}</p>
            <p>  <b> <i class="fa-solid fa-star"></i> Habilidade: </b> ${data.abilities.map(ability => ability.ability.name)} </p>
            <p>  <b> <i class="fa-solid fa-weight-hanging"></i> Peso: </b> ${data.weight/ 10}</p>
            <p>  <b> <i class="fa-solid fa-up-down"></i> Altura: </b> ${data.height / 10}</p>

            <p>  <b> <i class="fa-solid fa-heart"></i> Vida: </b> ${hp} </p>
            <p>  <b> <i class="fa-solid fa-hand-fist"></i> Ataque: </b> ${ataque} </p>
            <p>  <b> <i class="fa-solid fa-shield"></i> Defesa: </b> ${defesa} </p>
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