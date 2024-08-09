let contador = 0;



function buscar() {
    let entrada = document.getElementById("entrada").value.toLowerCase();
    //se o tamanho da entrada for menor que 1 caracter
    if(entrada.length < 1){
        entrada = contador;
    }
    let url = `https://pokeapi.co/api/v2/pokemon/${entrada}`;

    //buscar url - response e a resposta ,  espera e retorna  de um arquivo json
    fetch(url)
        .then(response => response.json())
        .then(dados => {
//  variavel que pega todas as estatisticas
            let estatisticas = dados.stats;
            //obtem individualmente dentro de estatisticas o hp,ataque  e defesa
            let hp = estatisticas.find(item => item.stat.name === "hp").base_stat;
            let ataque = estatisticas.find(item => item.stat.name === "attack").base_stat;
            let defesa = estatisticas.find(
                function(item){
                return item.stat.name === "defense";
        }
    ).base_stat;

    console.log(dados)
            
//pega o elemento tela no html 
var tela = document.getElementById("tela"); 
 //faz parecer no elemento tela
 tela.innerHTML =
`

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${dados.id}.gif">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${dados.id}.gif">
<div class="numero"> ${dados.id}</div>

<div class="informacoes">
<h2><b>nome:</b> ${dados.name}</h2>
<p> <b>tipo:</b> ${dados.types.map(type => type.type.name)} </p>
<p> <b>Habilidades:</b> ${dados.abilities.map(ability => ability.ability.name)} <p>

<p> <b>altura:</b>${dados.weight / 10} m<p>
<p> <b>peso:</b> ${dados.height / 10} kg <p>

<p> <b>vida:</b> ${hp} <p>
<div id="hp"></div>
<p> <b>ataque:</b> ${ataque} <p>
<div id="ataque"></div>
<p> <b>defesa:</b> ${defesa} <p>
<div id="defesa"></div>

</div>

` ;
contador = dados.id;
//limpar campo de entrada
document.getElementById("entrada").value="";

let maximo = 255;

let hpBarra = new ProgressBar.Line('#hp',{
    strokeWidth: 1, //espessura da linha de progresso
color: '#871248', //cor
trailColor: '#e0e0e0', //cor da trilha
trailWidth: '1',   //espessura das trilhas
duration: 1400   //duração da imaginação 
});
let ataqueBarra = new ProgressBar.Line('#ataque',{
    strokeWidth: 1, //espessura da linha de progresso
color: '#871248', //cor
trailColor: '#e0e0e0', //cor da trilha
trailWidth: '1',   //espessura das trilhas
duration: 1400   //duração da imaginação 
});
let defesaBarra = new ProgressBar.Line('#defesa',{
    strokeWidth: 1, //espessura da linha de progresso
color: '#871248', //cor
trailColor: '#e0e0e0', //cor da trilha
trailWidth: '1',   //espessura das trilhas
duration: 1400   //duração da imaginação 
});
hpBarra.animate(hp/maximo);
ataqueBarra.animate(ataque/maximo);
defesaBarra.animate(defesa/maximo)

        }).catch(error => {
            alert('algo deu errado' + error); 

        });
    }
    function avancar(){
    
        contador = contador + 1;
        buscar();

    }
    function voltar(){
        contador -= 1;
        buscar();

    }
