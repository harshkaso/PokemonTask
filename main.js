// const request = require("request");
// var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
// let options = {json: true};
// var dataset;
// request(url, options, (error, res, body) => {
//     if(error) {
//         return console.error("ERROR:", error);
//     }
//     if(!error && res.statusCode == 200){
//         dataset = body.pokemon;
//         // return console.log("BODY: ", dataset[0].id);
//     }

// });


let pokemons = require("./pokemon.json");
pokemons = pokemons.pokemon;

function getByName(name){
    for(let pokemon of pokemons){
        if(pokemon["name"] == name){
            console.log(pokemon);
            return;
        }
    }
    console.error("No pokemon in the database has the name " + name);
};

function getByNextEvolution(nextEvo){
    let pokes = [];
    for(let pokemon of pokemons){
        nextEvolutions = pokemon["next_evolution"];
        if(nextEvolutions){
            for(let evolution of nextEvolutions){
                if(evolution["name"] ==  nextEvo){
                    pokes.push(pokemon["name"]);
                    break;
                }
            }
        }
    }
    if(!pokes.length){
        console.error("No pokemon in database evolves to " + nextEvo);
        return;
    }
    console.log(pokes);
}

function getByWeakness(weakness){
    let pokes = [];
    for(let pokemon of pokemons){
        allWeaknesses = pokemon["weaknesses"];
        for(let aweakness of allWeaknesses){
            if(aweakness == weakness){
                pokes.push(pokemon["name"]);
                break;
            }
        }
    }
    if(!pokes[0]){
        console.error("No pokemon in database has " + weakness + " weakness");
        return;
    }
    console.log(pokes);
}

function driver(){
// ============== INPUT CONFIG =============== //
    var name = "Charmandar";
    var nextEvo = "Bulbuasaur";
    var weakness = "Water";
// =========================================== //
    console.log("Getting details of a pokemon with " + name + " as name:");
    getByName(name);
    console.log("==============================================================")
    console.log("Getting all pokemons with " + nextEvo + " as next evolution:");
    getByNextEvolution(nextEvo);
    console.log("==============================================================")
    console.log("Getting all pokemons with " + weakness + " weakness:");
    getByWeakness(weakness);
}

driver();