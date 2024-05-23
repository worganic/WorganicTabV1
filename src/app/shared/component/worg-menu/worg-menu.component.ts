import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-worgMenu',
  templateUrl: './worg-menu.component.html',
  styleUrls: ['./worg-menu.component.scss'],
  standalone: true,
  imports:  [NgFor, NgIf, RouterOutlet, RouterLink, CommonModule,]
})
export class WorgMenuComponent  implements OnInit {
 
  // Récupération des options du tableau :
  @Input() menuListe!: any;
 
  nameAff: string = "";
  class: string = "";
  type: string = "text";

  constructor() {}

  ngOnInit(): void {
    console.log("worgMenuComponent | ngOnInit / menuListe : ", this.menuListe);
     // Menu :
 
    
  }

   /**
   * toggleMenu
   */
   isMenuOpen = false;
   toggleMenu(): void {
     this.isMenuOpen = !this.isMenuOpen;
   }

  /**
   * menu niveau 0
   */
  menuLigne0: string = '';
  menu0(section: any){
    console.log("worgMenuComponent | menu0 / section : ", section);
    this.menuLigne0 = section;
    this.menuLigne1 = '';
  }

  /**
   * menu niveau 1
   */
  menuLigne1: string = '';
  menu1(section: any){
    console.log("worgMenuComponent | menu1 / section : ", section);
    this.menuLigne1 = section;
  }

  /**
   * menu niveau 2
   */
  menuLigne2: string = '';
  menu2(section: any){
    console.log("worgMenuComponent | menu2 / section : ", section);
    this.menuLigne2 = section;
  }

  typeOf(co: any){
    return typeof co;
  }

  /*
   * This is used to override the default comparator function of keyvalue pipe in angular - https://angular.io/api/common/KeyValuePipe 
   */
  asIsOrder() {
    return 0;
  }
}