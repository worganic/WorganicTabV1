import { Component } from '@angular/core';

@Component({
  selector: 'app-worgTabTuto',
  templateUrl: './worgTabTuto.component.html',
  styleUrls: ['./worgTabTuto.component.scss'],
  standalone: true,
  imports: []
})
export class WorgTabTutoComponent {

  // Tableau menu renvoyé au composant :
  menuListe: any;



  ngOnInit(): void {
    console.log("WorgTabTutoComponent | ngOnInit");

  }
}