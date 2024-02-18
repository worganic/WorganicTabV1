import { Component, ViewChild, ViewContainerRef, Input, OnInit, ChangeDetectorRef,} from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  standalone: true
})
export class ExpandableComponent implements OnInit {
  title = 'ExpandableComponent';
  element: any;
  importExpandable: any;
  componentRef: any;

  // Récupération d'element et du nom de la catégorie :
  @Input() expandableOptions!: any[];

  // Injection dans le code html :
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: any;
 
  constructor(
    private changeDetector: ChangeDetectorRef
    ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    console.log("ExpandableComponent | ngOnInit");
    this.element = this.expandableOptions[0];
    this.importExpandable = this.expandableOptions[2]['import']['importExpandable'];
  }

  /**
   * createComponent
   *
   * @param message
   * @param type
   * @param importExpandable
   */
  createComponent(importExpandable: any) {
    this.entry.clear();
    this.componentRef = this.entry.createComponent(importExpandable);
    this.componentRef.instance.element = this.element;
    this.changeDetector.detectChanges();
  }
 
  /**
   * destroyComponent
   */
  destroyComponent() {
      this.componentRef.destroy();
  }

  /**
   * ngAfterViewInit
   */
  ngAfterViewInit() {
    this.createComponent(this.importExpandable);
  }
}
