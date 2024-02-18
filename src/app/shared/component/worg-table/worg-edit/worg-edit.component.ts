import { ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'worg-edit',
  templateUrl: './worg-edit.component.html',
  styleUrls: ['./worg-edit.component.scss'],
  standalone: true,
})
export class WorgEditComponent {
  // Récupération d'element et du nom de la catégorie :
  @Input() editOptions!: any[];

  // Injection dans le code html :
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: any;
  componentRef: any;
  element: any;
  column: string = "";
  importEdit: any;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    console.log("ExpandableComponent | ngOnInit / editOptions :", this.editOptions);
    this.element    = this.editOptions[0];
    this.column     = this.editOptions[2];
    this.importEdit = this.editOptions[3]['import']['importEdit'];
  }

  /**
   * createComponent
   * 
   * @param importEdit 
   */
  createComponent(importEdit: any) {
    this.entry.clear();
    this.componentRef = this.entry.createComponent(importEdit);
    this.componentRef.instance.element = this.element;
    this.componentRef.instance.column = this.column;
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
    this.createComponent(this.importEdit);
  }
}
