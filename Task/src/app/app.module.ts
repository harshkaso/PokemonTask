import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './PokemonService/pokemon.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule, MatFormFieldModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
