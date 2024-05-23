import { Component } from '@angular/core';
import { WorgMenuComponent } from 'src/app/shared/component/worg-menu/worg-menu.component';

@Component({
  selector: 'app-worgMenuExemples',
  templateUrl: './worgMenuExemples.component.html',
  styleUrls: ['./worgMenuExemples.component.scss'],
  standalone: true,
  imports: [WorgMenuComponent]
})
export class WorgMenuExemplesComponent {

  // Tableau menu renvoyé au composant :
  menuListe: any;



  ngOnInit(): void {
    console.log("WorgMenuComponent | ngOnInit");

    // Menu :
    this.menuListe = {
      'Home': "/projets/worgMenu/worgMenuExemples",
      'Projets': {
        'Array': {
          'Tab users': '/projets/worgMenu/worgMenuExemples',
          'Tab Multiple': '/projets/worgMenu/worgMenuExemples',
        },
        'Menu': {
          'Menu - Tuto': '/projets/worgMenu/worgMenuExemples',
          'Menu - Exemples': '/projets/worgMenu/worgMenuExemples',
        }
      },
      'Tutos': {
        'Divers': {
          'design': '/projets/worgMenu/worgMenuExemples',
          'injected': '/projets/worgMenu/worgMenuExemples',
          'ngbootstrap': '/tutos/ngbootstrap',
        },
        'Projet array': {
          'st2': '/projets/worgMenu/worgMenuExemples',
          'st3': '/projets/worgMenu/worgMenuExemples',
          'Signals': '/projets/worgMenu/worgMenuExemples',
        },
        'Menu': '/projets/worgMenu/worgMenuExemples',
      },
      'Abouts': "/projets/worgMenu/worgMenuExemples",
    };
  }
}