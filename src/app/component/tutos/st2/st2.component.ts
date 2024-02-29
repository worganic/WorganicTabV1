import { Component } from '@angular/core';

@Component({
  selector: 'app-st2',
  templateUrl: './st2.component.html',
  styleUrls: ['./st2.component.scss'],
  standalone: true
})
export class St2Component {
  ngOnInit(): void {
    console.log("St2Component | ngOnInit" );
  }

}
