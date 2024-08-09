function buscar() {
    var entrada = document.getElementById("entrada").value.toLowerCase()

    var url = "https://pokeapi.co/api/v2/pokemon/"+ entrada +" ";
    
    // fetch pega o conteudo da API
    fetch(url).then(response => response.json()).then(data => {
        var tela = document.getElementById("tela")

        tela.innerHTML =

'<h2>' + data.name + '</h2>'

 +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" "; > '
+' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif" "; > '

        + '<p> id: ' + data.id + '</p>'
        + '<p> type: ' + data.types.map(type => type.type.name) + '</p>'

        + '<p> Habilidades: ' + data.abilities.map(abilities => abilities.ability.name) + '</p>'

        document.getElementById("entrada").value + '' //limpa o input

    }).catch(erro => {
var tela = document.getElementById("entrada");
tela.innerHTML = '<p> Pokemon nao encontrado, erro ' + erro
    })



}