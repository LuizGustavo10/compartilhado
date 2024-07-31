let contador = 0;


function buscar(){
  let entrada = document.getElementById("entrada").value.toLowerCase();

  if( entrada.length < 1){
    entrada = contador;
  }

  let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;
  //buscar
  fetch(url).then(resp => resp.json()).then(dados =>{

    // pega status
    let estatisticas = dados.stats;
    let hp = estatisticas.find(stat => stat.stat.name === "hp").base_stat;
    let attack = estatisticas.find(stat => stat.stat.name === "attack").base_stat;
    let defense = estatisticas.find(stat => stat.stat.name === "defense").base_stat;
    let speed = estatisticas.find(stat => stat.stat.name === "speed").base_stat;

    // imprime tela
    var tela = document.getElementById("tela");
  
    tela.innerHTML = 
    `<img src="${dados.sprites.front_default}">
    <img src="${dados.sprites.back_default}">
    <h2>Nome: ${dados.name}</h2>
    <p> id: ${dados.id}</p>
    <p> Tipo: ${dados.types.map(type => type.type.name)}</p>
    <p> habilidades: ${dados.abilities.map(ability =>  ability.ability.name)}</p>
    <p> Vida: ${hp}</p>
    <p> Ataque: ${attack}</p>
    <p> Defesa: ${defense}</p>
    <p> Velocidade: ${speed}</p>
    <br>
    <button class="btn" onclick="voltar()">Anterior</button>
    <button class="btn" onclick="avancar()">Próximo</button>
    `;
    contador = dados.id;
    entrada = document.getElementById("entrada").value="";
  }).catch(error => {
    tela.innerHTML = 
    `<h2>Pokemom não encontrado</h2>
    <p>Tente novamente + ${error}</p>`
  })
}

function voltar(){
  contador = contador - 1;
  buscar();
}
function avancar(){
  contador = contador + 1;
  buscar();
}