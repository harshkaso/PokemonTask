
const request = require("request");
var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
let options = {json: true};
request(url, options, (error, res, body) => {
    if(error) {
        return console.error("ERROR:", error);
    }
    if(!error && res.statusCode == 200){
        var pokemons = body.pokemon;
        
    }

});

function getByName(name){
    for(let pokemon of pokemons){
        if(pokemon["name"] == name){
            console.log(pokemon);
            return;
        }
    }
    console.error("No pokemon in the database has the name " + name);
};

getByName("Ivysaur");