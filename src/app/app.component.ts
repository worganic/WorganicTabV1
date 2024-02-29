import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgFor, NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, RouterOutlet, RouterLink]
})
export class AppComponent implements OnInit {

  title = 'worganic-tab';
  version: string = '';
  mail: string = '';
  github: string = '';
  annee: string = '';

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
  }

  // Système de changement de style (light/dark) :
  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;
    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  /**
   * toggleMenu
   */
   isMenuOpen = false;
   toggleMenu(): void {
     this.isMenuOpen = !this.isMenuOpen;
   }

   
  /**
   * menu
   */
  menuLigne2: string = '';
  menu(section: string){
    console.log("AppComponent | menu / section : ", section);
    this.menuLigne2 = section;
  }

  menuLigne3: string = '';
  menu2(section: string){
    console.log("AppComponent | menu2 / section : ", section);
    this.menuLigne3 = section;
  }

}
