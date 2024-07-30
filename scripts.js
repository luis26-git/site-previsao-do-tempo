
const key = "0e7878b8d09a4f8bccb2dabd6668a060"

function colocardados(dados){
    

  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".img-previsao").innerHTML = dados.weather[0].icon.png

 }

async function buscarcidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json() )
    console.log(dados)


    colocardados(dados)
}


function cliqueibotao() {
 const cidade = document.querySelector(".input-cidade").value
 
 buscarcidade(cidade)

}