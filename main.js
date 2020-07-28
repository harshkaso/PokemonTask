let func = require("./functions");
const request = require("request");
var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
let options = {json: true};
request(url, options, (error, res, body) => {
    if(error) {
        return console.error("ERROR:", error);
    }
    if(!error && res.statusCode == 200){
        var pokemons = body.pokemon;
        // ============== INPUT CONFIG =============== //
        var name = "Charmandar";
        var nextEvo = "Bulbuasaur";
        var weakness = "Water";
        // =========================================== //
        console.log("Getting details of a pokemon with " + name + " as name:");
        func.getByName(pokemons, name);
        console.log("==============================================================")
        console.log("Getting all pokemons with " + nextEvo + " as next evolution:");
        func.getByNextEvolution(pokemons, nextEvo);
        console.log("==============================================================")
        console.log("Getting all pokemons with " + weakness + " weakness:");
        func.getByWeakness(pokemons, weakness);
    }
});

