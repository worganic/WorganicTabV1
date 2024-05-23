import { Component } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-worgMenuAfaire',
  templateUrl: './worgMenuAfaire.component.html',
  styleUrls: ['./worgMenuAfaire.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, CommonModule ]
})
export class worgMenuAfaireComponent {

  // http://route63.free.fr/divers/codage-texte-html-iso-specialchars-decodage/
  // données :
  infos: any;

  ngOnInit(): void {
    console.log("worgMenuAfaireComponent | ngOnInit" );

  }

  /*
   * This is used to override the default comparator function of keyvalue pipe in angular - https://angular.io/api/common/KeyValuePipe 
   */
    asIsOrder() {
      return 0;
    }

    typeOf(co: any){
      return typeof co;
    }
}
