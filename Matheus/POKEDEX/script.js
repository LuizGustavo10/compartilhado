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
    .then(dados => {

        //variável que pega todas as estatisticas
        let estatisticas = dados.stats;
        //obtém individualmente dentro de estatisticas o HP, ataque e defesa
        let hp = estatisticas.find(stat => stat.stat.name === "hp").base_stat;
        let ataque = estatisticas.find(stat => stat.stat.name === "attack").base_stat;
        let defesa = estatisticas.find(stat => stat.stat.name === "defense").base_stat;

        

        //pega o elemento tela no html
       var tela = document.getElementById("tela");
       //faz aparecer no elemento tela
       tela.innerHTML = 

       
       `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${dados.id}.gif">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated//${dados.id}.gif">
       
        <div class="numero"> ${dados.id}</div>

     <div class="informacoes">

	    <p>  <b> <i class="fa-solid fa-tag"></i>  Nome: </b> ${dados.name} <p>
            <p>  <b> <i class="fa-solid fa-sun"></i> Tipo: </b>${dados.types.map(type => type.type.name)} </p>
            <p>  <b> <i class="fa-solid fa-star"></i> Habilidades: </b> ${dados.abilities.map(ability => ability.ability.name)} </p>
            <p>  <b> <i class="fa-solid fa-weight-hanging"></i> Peso: </b> ${dados.weight / 10} Kg </p>
            <p>  <b> <i class="fa-solid fa-up-down"></i>  Altura: </b> ${dados.height / 10} M</p>

            <p>  <b>Vida: </b> ${hp} </p>
            <div id="hp"></div>
            <p>  <b>Ataque: </b> ${ataque} </p>
            <div id="ataque"></div>
            <p>  <b>Defesa: </b> ${defesa} </p>
            <div id="defesa"></div>
       `;
        contador = dados.id;
        //limpar campo de entrada
        document.getElementById("entrada").value="";

 let maximo = 255; 

 let hpbarra= new ProgressBar.Line('#hp',{
   strokewidth: 1,
   color: '#b84304',
   trailColor:'#e0e0e0',
   trailWidth: 1,
  duration: 1400
 });




 let ataquebarra = new ProgressBar.Line('#ataque',{
    strokewidth: 1,
    color: '#b84304',
    trailColor:'#e0e0e0',
    trailWidth: 1,
   duration: 1400
  });

  let defesabarra = new ProgressBar.Line('#defesa',{
    strokewidth: 1,
    color: '#b84304',
    trailColor:'#e0e0e0',
    trailWidth: 1,
   duration: 1400
  });

  hpbarra.animate(hp/maximo);
 ataquebarra.animate(ataque/maximo);
 defesabarra.animate(defesa/maximo);




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
