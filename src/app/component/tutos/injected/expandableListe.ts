import { Component, Injectable } from '@angular/core';
//import { ExpandedComponent } from '../component/users/expanded/expanded.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@Injectable({
  providedIn: 'root'
})
export class ExpandableService {

  constructor() {}
  liste : { [key: string]: any; } | undefined;
 
   getListe() {
    
   // const ExpandedComponent = await import('src/app/component/users/expanded/expanded.component');

    this.liste = {
     // "users": ExpandedComponent,
      "child1": ChildComponent,
      "child2": Child2Component
    }

    // return pipeUser.Pipe.prototype;
    return this.liste;
  }
}
