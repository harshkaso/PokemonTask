import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
  constructor(private http: HttpClient) {  }

  getDataset():Observable<any>{
    return this.http.get(this.url)
    .pipe(catchError(err => this.handleError(err)))
  }

  getByName(pokemons, name){
    for(let pokemon of pokemons){
        if(pokemon["name"] == name){
            console.log(pokemon);
            return pokemon;
        }
    }
    console.error("No pokemon in the database has the name " + name);
    return "No pokemon in the database has the name " + name;
  }

  getByNextEvolution(pokemons, nextEvo){
    let pokes = [];
    for(let pokemon of pokemons){
        let nextEvolutions = pokemon["next_evolution"];
        if(nextEvolutions){
            for(let evolution of nextEvolutions){
                if(evolution["name"] ==  nextEvo){
                    console.log("Hehe")
                    pokes.push(pokemon["name"]);
                    break;
                }
            }
        }
    }
    console.log(pokes);
    if(!pokes.length){
        console.error("No pokemon in database evolves to " + nextEvo);
        return "No pokemon in database evolves to " + nextEvo;
    }
    return pokes;
  }
  
  getByWeakness(pokemons, weakness){
    let pokes = [];
    for(let pokemon of pokemons){
        let allWeaknesses = pokemon["weaknesses"];
        for(let aweakness of allWeaknesses){
            if(aweakness == weakness){
                pokes.push(pokemon["name"]);
                break;
            }
        }
    }
    if(!pokes[0]){
        console.error("No pokemon in database has " + weakness + " weakness");
        return "No pokemon in database has " + weakness + " weakness";
    }
    console.log(pokes);
    return pokes;
}

  private handleError(error: any) {
    console.error(error.message || error);
    return throwError(error.status);
  }

}
