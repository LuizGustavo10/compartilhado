function buscar() {
    let entrada = document.getElementById("entrada").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;

    //buscar url - response é a resposta, que espera o retorno de um arquivo json
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //pega o elemento tela no html
        let tela = document.getElementById("tela");
        //faz aparecer no elemento tela
        tela.innerHTML = 
        `
        <img src="${data.sprites.front_default}">
        <img src="${data.sprites.back_default}">
        <h2> Nome: ${data.name} </h2>
        <p>  Id: ${data.id} </p>
        <p>  Tipo: ${data.types.map(type => type.type.name)}</p>
        <p>  Habilidade: ${data.abilities.map(ability => ability.ability.name)} </p>
        `;
    });
}