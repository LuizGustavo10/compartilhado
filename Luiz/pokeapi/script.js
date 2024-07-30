function buscar(){
    let entrada = document.getElementById("entrada").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;

    //buscar url - response é a resposta, que espera o retorno de um arquivo json
    fetch(url)
    .then(response =>response.json())
    .then(dados => {
        //pega o elemento tela no html
       let tela = document.getElementById("tela");
       //faz aparecer no elemento tela
       tela.innerHTML = 
       `
        <img src="${dados.sprites.front_default}">
        <img src="${dados.sprites.back_default}">
        <h2> Nome: ${dados.name} </h2>
        <p>  Id: ${dados.id} </p>
        <p>  Tipo: ${dados.types.map(type => type.type.name)} </p>
        <p>  Habilidades: ${dados.abilities.map(ability => ability.ability.name)} </p>
      // <p>  Status: {dados.stats.map(stat => stat.stat.name + stat.base_stat)} </p>
   
       `;

    });
}