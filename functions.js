function getByName(pokemons, name){
    for(let pokemon of pokemons){
        if(pokemon["name"] == name){
            console.log(pokemon);
            return;
        }
    }
    console.error("No pokemon in the database has the name " + name);
};

function getByNextEvolution(pokemons, nextEvo){
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

function getByWeakness(pokemons, weakness){
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

module.exports = {
    getByName: getByName,
    getByNextEvolution: getByNextEvolution,
    getByWeakness: getByWeakness
}