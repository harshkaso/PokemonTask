import { Component } from '@angular/core';
import { PokemonService } from './PokemonService/pokemon.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons: JSON;
  result: any;
  constructor(private pokemon: PokemonService){ 
    this.getDataset();
    this.result = "";
   }

  getDataset(){
    this.pokemon.getDataset().subscribe((data: any) => {
      this.pokemons = data["pokemon"];
    });
  }

  getByName(name){
    this.result = this.pokemon.getByName(this.pokemons, name);
  }

  getByNextEvolution(nextEvo){
    this.result = this.pokemon.getByNextEvolution(this.pokemons, nextEvo);
  }

  getByWeakness(weakness){
    this.result = this.pokemon.getByWeakness(this.pokemons, weakness);
  }

}
