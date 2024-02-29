import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';


@Component({
  selector: 'app-worgMenu',
  templateUrl: './worg-menu.component.html',
  styleUrls: ['./worg-menu.component.scss'],
  standalone: true,
  imports: [
    NgFor, NgIf, CommonModule,
  ]
})
export class WorgMenuComponent  implements OnInit {
 
  // Récupération des options du tableau :
  @Input() options!: any[];
 
  nameAff: string = "";
  class: string = "";
  type: string = "text";


  constructor() {}


  ngOnInit(): void {
    console.log("worgMenuComponent | ngOnInit / options : ", this.options);
    if(this.options){
      this.nameAff = this.options[0];
      this.class = this.options[1];
    }
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
    console.log("worgMenuComponent | menu / section : ", section);
    this.menuLigne2 = section;
  }

  /**
   * menu
   */
  menuLigne3: string = '';
  menu2(section: string){
    console.log("worgMenuComponent | menu2 / section : ", section);
    this.menuLigne3 = section;
  }
}