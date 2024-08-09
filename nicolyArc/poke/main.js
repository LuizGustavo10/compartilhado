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
    `
    <div class="numero"> ${dados.id}</div>

    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${dados.id}.gif">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${dados.id}.gif">
    
    
    <div class="informacoes">

    <h2><b>Nome:</b> ${dados.name}</h2>
    <p> <b>Tipo:</b> ${dados.types.map(type => type.type.name)}</p>
    <p> <b>habilidades:</b> ${dados.abilities.map(ability =>  ability.ability.name)}</p>
    <p> <b>Vida:</b> ${hp}</p>
    <div id="hp"></div>
    <p> <b>Ataque:</b> ${attack}</p>
    <div id="ataque"></div>
    <p> <b>Defesa:</b> ${defense}</p>
    <div id="defesa"></div>
    <p> <b>Velocidade:</b> ${speed}</p>
    <div id="velocidade"></div>
    <p> <b>Peso:</b> ${dados.weight}</p>
    <p> <b>Altura:</b> ${dados.height}</p>
    <button class="btn dois" onclick="voltar()"><i class="fa-solid fa-arrow-left"></i></button>
    <button class="btn um" onclick="avancar()"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    `;
    contador = dados.id;
    entrada = document.getElementById("entrada").value="";

    let maxStat = 255;

    let hpBarra = new ProgressBar.Line('#hp',{ 
      strokeWidth: 2, //Espessura da linha de progresso
      color: '#ce5252', // cor da linha de progresso
      trailColor: '#e2e2e2', // cor da trilha
      trailWidth: '1', //espessura da trilha
      duration: 900, // duração da animação
    });

    let ataBarra = new ProgressBar.Line('#ataque',{ 
      strokeWidth: 2, //Espessura da linha de progresso
      color: '#f1ca5f', // cor da linha de progresso
      trailColor: '#e2e2e2', // cor da trilha
      trailWidth: '1', //espessura da trilha
      duration: 900, // duração da animação
    });

    let defBarra = new ProgressBar.Line('#defesa',{ 
      strokeWidth: 2, //Espessura da linha de progresso
      color: '#72c1cc', // cor da linha de progresso
      trailColor: '#e2e2e2', // cor da trilha
      trailWidth: '1', //espessura da trilha
      duration: 900, // duração da animação
    });

    let velCircle = new ProgressBar.SemiCircle('#velocidade' ,{ 
      strokeWidth: 2, //Espessura da linha de progresso
      color: '#f1ca5f', // cor da linha de progresso
      trailColor: '#e2e2e2', // cor da trilha
      trailWidth: '1', //espessura da trilha
      duration: 900, // duração da animação
      svgStyle: null,
    });

    hpBarra.animate(hp/maxStat)
    ataBarra.animate(attack/maxStat)
    defBarra.animate(defense/maxStat)
    velCircle.animate(speed/maxStat)

  }).catch(error => {
    tela.innerHTML = 
    `<h2>Pokemom não encontrado</h2>
    <p>Tente novamente <br> ${error}</p>`
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