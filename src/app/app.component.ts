import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { WorgMenuComponent } from 'src/app/shared/component/worg-menu/worg-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, RouterOutlet, RouterLink, WorgMenuComponent]
})
export class AppComponent implements OnInit {

  title = 'worganic-tab';
  version: string = '';
  mail: string = '';
  github: string = '';
  annee: string = '';

  // Tableau menu renvoyé au composant :
  menuListe1: any;

  numbers: Array<number> = [];
  public isLightTheme!: boolean;

  constructor() {}

 ngOnInit(): void {

    this.version = environment.version;
    this.mail = environment.mail;
    this.github = environment.github;
    this.annee = environment.annee;

    // Affichage de plusieurs ligne pour test :
    this.numbers = Array(30).fill(1).map((x,i)=>i);

    // Système de changement de style (light/dark) :
    var th = document.body.getAttribute('data-theme');
    this.isLightTheme = false;
    if( th == 'light'){
      this.isLightTheme = true;
    }

    // Menu :
    this.menuListe1 = {
      'Home': "",
      'Projets': {
        'Array': {
          'Tuto': '/projets/worgtab/WorgTabTutoComponent',
          'Exemples : users': '/projets/worgtab/users',
          'Exemples : Tab Multiple': '/projets/worgtab/multiple',
        },
        'Menu': {
          'Tuto': '/projets/WorgMenuTuto',
          'Exemples': '/projets/worgMenu/worgMenuExemples',
          'A faire': '/projets/worgMenu/worgMenuAfaire',
        }
      },
      'Tutos': {
        'Divers': {
          'design': '/tutos/design',
          'injected': '/tutos/injected',
          'ngbootstrap': '/tutos/ngbootstrap',
        },
        'Projet array': {
          'st2': '/tutos/st2',
          'st3': '/tutos/st3',
          'Signals': '/tutos/branch-0002',
        },
        'Menu': '/tutos/branch-0001',
      },
      'Abouts': "/divers/abouts",
    };
  }

  // Système de changement de style (light/dark) :
  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;
    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

}
