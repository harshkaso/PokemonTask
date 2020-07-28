let func = require("./functions"),
    pokemons = require("./dataset.json");
pokemons = pokemons.pokemon;

function driver(){
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

driver();