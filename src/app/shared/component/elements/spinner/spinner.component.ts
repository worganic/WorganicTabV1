import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [
    NgFor, NgIf, CommonModule,
  ]
})
export class SpinnerComponent  implements OnInit {
 
  // Récupération des options du tableau :
  @Input() options!: any[];
 
  nameAff: string = "";
  class: string = "";
  type: string = "text";


  constructor() {}


  ngOnInit(): void {
    console.log("SpinnerComponent | ngOnInit / options : ", this.options);
    if(this.options){
      this.nameAff = this.options[0];
      this.class = this.options[1];
    }
  }
}