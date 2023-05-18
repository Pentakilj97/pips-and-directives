import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

user: User ={
  username: "codermonkey",
  name: "nicolò", //mi serve un pipe che trasforma in uppercase la prima lettera
  surname: "esposito",
  yob: 1999, // mi serve un pipe che calcola l'età
  descritpion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati dignissimos debitis, consequuntur a fuga dolorem cumque nihil nemo, nam corporis! Excepturi doloribus quasi enim aspernatur, perferendis inventore voluptatum commodi.",
  // mi serve un pipe che tronchi la descrizione dopo 30 caratteri e aggiunga tre puntini
}

}


export interface User {
username: string
name: string
surname: string
yob: number
descritpion: string
}

