function buscar(){
    let entrada = document.getElementById('entrada').value.toLowerCase();
let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;


// buscar 
fetch(url)
.then(Response => Response.json())
.then(dados => {
    // pegar o elemento da tela no html
    let tela = document.getElementById('tela');
    // faz aparecer no elemento tela
    tela.innerHTML =
    `
    <img src="${dados.sprites.front_default}">
    <img src="${dados.sprites.back_default}">
    <h2>Nome: ${dados.name}</h2>
    <p>Id: ${dados.id}</p>
    <p>Tipo: ${dados.types.map(type => type.type.name)}</p>
    <p>Habilidades: ${dados.abilities.map(ability => ability.ability.name)}</p>


    `;

});


}