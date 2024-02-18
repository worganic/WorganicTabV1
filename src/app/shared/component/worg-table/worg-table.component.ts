import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, of, Subject } from 'rxjs';
import { WorgPaginationComponent } from 'src/app/shared/component/worg-table/worg-pagination/worg-pagination.component';
import { TbPipe } from 'src/app/shared/component/worg-table/worg-pipes/tbPipe.pipe'
import { ExpandableComponent } from 'src/app/shared/component/worg-table/worg-expandable/expandable.component';
import { WorgEditComponent } from 'src/app/shared/component/worg-table/worg-edit/worg-edit.component';
import { SpinnerComponent } from 'src/app/shared/component/elements/spinner/spinner.component';

// Interface : liste des elements d'une colonne de table :
export interface Listecolumn {
  column: string;// Nom de la colonne dans les datas.
  columnTitle: string;// Nom de la colonne affiché.
  type: string;// Type d'infos : [number/string/boolean].
  columnHidden: boolean;// Colonne non affiché (hidden).
  filter: boolean;// Filtre de la colonne [true/false].
  filterType: string; // Filtre : type : [text/select].
  filterSelectData: any;// Filtre : liste des données du select.
  filterSelectDefault: string;// Filtre : donnée par default.
  filterSelectVide: string;// Filtre : donnée par default si données vide.
  edit: boolean;// Edition de la colonne.
  editType: string;
}

export interface ModelExport {
  element: any,
  action: string,
  column: string
}

@Component({
  selector: 'app-worg-table',
  templateUrl: './worg-table.component.html',
  styleUrls: ['./worg-table.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, WorgTableComponent,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    WorgPaginationComponent,
    TbPipe,
    ExpandableComponent,
    WorgEditComponent,
    SpinnerComponent
  ]
})
export class WorgTableComponent implements OnInit {

  dataSelectAsync$: Observable<any> | undefined;
  input$ = new Subject<string>();

  // Test pour affiché ou non une valeur identique à la ligne du dessus :
  variableTest: string = "";
  car: string = "";

  // Récupération des options du tableau :
  @Input() tableOption!: any[];
  // Récupération des data :
  @Input() ELEMENT_DATA!: any[];// Données récupéré en asynchrone.
  //
  @Output() action = new EventEmitter<ModelExport>();
  // Appel pour récupération des data :
  @Output() newDataEvent = new EventEmitter<any>();

  // Actualisation de la zone infos.
  infoActualisation: boolean = false;

  // Spinner :
  spinner0: boolean = true;
  spinner: boolean = true;

  // Data récupéré et affiché dans la vue.
  viewData!: any[];
  DATATAB!: any[];
  viewDataLenght: number = 0;
  elementAffiche: number = 0;
  elementTotal: number = 0;

  // Timer de réactualisation :
  interval: any | undefined;// Premier timer d'actualisation.
  interval2: any | undefined;// Second timer pour l'affichage des infos de maj.
  timeLeft: number = environment.timerRooms;
  time = 0;

  // Table options :
  sectionName: any;
  urlParent: string = "";
  importPipe: any | undefined;
  tableAffichage: boolean = true;
  tableTimer: boolean = true;
  tableTimerTemps: number = environment.timerRooms;
  filtre: boolean = true;
  paginatorPageSize: number = 10;
  paginatorMaxSize: number = 2;
  paginator: boolean = false;
  infosNbElement: boolean = false;
  infosNbElementText: string = "Nombre d'élément total";

  // Expandable :
  expandabled: boolean = false;
  expandabledOr: boolean = false;
  expandableIf: string = '';
  expandableIfBo: boolean = false;
  expandableCol: boolean = false;
  expandableColIco: boolean = false;

  optionAdd: boolean = false;
  optionInfosPlus: any = {};

  // Form : add/edit/
  form!: FormGroup<any>;
  dataEdit: boolean = false;
  dataAdd: boolean = false;
  primaire: string = 'id';

  service: any;// Service récupéré.
  Listecolumns!: Listecolumn[]; // Initialisation de la liste des filtres :

  // Pagination :
  currentPage = 1;
  totalPages = 10;

  variable: string = '';

  /**
   * constructor
   *
   * @param _fb
   */
  constructor(){}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    console.log('WorgTableComponent | ngOnInit');

    // Mise en place des filtres :
    const group: any = {};
    Object.entries(this.Listecolumns).forEach(([key, value], index) => {
      // console.log('WorgTableComponent | Object / value :',value);
      group[value.column] = new FormControl(value.filterSelectDefault);
    });
    this.form = new FormGroup(group);

    // Récupération des datas :
    this.startTimer();
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy() {
    if (this.interval) {
      console.log("WorgTableComponent | ngOnDestroy");
      clearInterval(this.interval);
    }
  }

  /**
   * startTimer
   */
  startTimer(time1: number = this.timeLeft) {
    this.time = time1;
    //console.log("WorgTableComponent | startTimer / this.time", this.time);
    this.recupData();
    if (this.tableTimer) {
      this.interval = setInterval(() => {
        //console.log("WorgTableComponent | startTimer /setInterval / this.time", this.time);
        if (this.time > 0) {
          this.time--;
        } else {
          //console.log("WorgTableComponent | startTimer");
          this.service.deleteCached();
          this.recupData();
          this.time = this.timeLeft;
        }
      }, 1000)
    }
  }

  /**
   * majDonnees
   */
  majDonnees() {
    console.log("WorgTableComponent | majDonnees");
    this.spinner = true;
    this.time = 0;
  }

  /**
   * startTimerInfo
   */
  startTimerInfo() {
    var time = 5;
    //console.log("WorgTableComponent | startTimerInfo / time", time);
    this.interval2 = setInterval(() => {
      //console.log("WorgTableComponent | startTimerInfo / interval2 / time", time);
      if (time > 0) {
        time--;
      } else {
        //console.log("WorgTableComponent | startTimerInfo FIN");
        this.infoActualisation = false;
        time = 0;
        clearInterval(this.interval2);
      }
    }, 1000)
  }

  /**
   * recupData
   */
  recupData() {
    //console.log("WorgTableComponent | recupData");
    this.newDataEvent.emit('add');
  }


  // Function de Récupération des données :
  optionsPlus = new Array();
  majData(res: any) {
    // console.log("WorgTableComponent | majData");
    var isEqual = JSON.stringify(this.DATATAB) === JSON.stringify(res);


    if (!isEqual) {// Si les données ont évolué :
      //console.log("WorgTableComponent | majData / res : ", res);


      for (let i in res) {
        //console.log(res[i]);
        for (let ii in res[i]) {
          //console.log("---", ii);
          //console.log("---", res[i][ii]);
          // console.log(typeof(res[i][ii]));
          if (typeof (res[i][ii]) == 'object') {
            //console.log('***********************');
            //console.log("---------ii : ", ii);
            //console.log("---------res[i][ii] : ", res[i][ii]);
            //res[i][ii] = res[i][ii];
            for (let iii in res[i][ii]) {


              if (typeof (res[i][ii][iii]) == 'object') {
                //console.log("--------->>>>>", iii);
                //console.log("--------->>>>>", res[i][ii][iii]);
                for (let iiii in res[i][ii][iii]) {
                  res[i][ii + '_' + iii + '_' + iiii] = res[i][ii][iii][iiii];
                }
              } else {
                //console.log("--------->>>>>iii", iii);
                //console.log("--------->>>>>res[i][ii][iii]", res[i][ii][iii]);
                res[i][ii + '_' + iii] = res[i][ii][iii];
              }
            }
          }
        }
        // console.log('--------------------------------------');
      }

      console.log("WorgTableComponent | majData / res : ", res);
      this.optionsPlus = new Array();

      // Mise en place de l'expandable :
      if (this.expandabledOr) {
        // Récupération de la liste des éléments à vérifier pour l'expandable :
        var tt: any = this.expandableIf;
         console.log("WorgTableComponent | majData / expandable / tt : ", tt);
        if (tt) {


          var exp: Boolean = false;// False par defaut.
          // On parcour des datas :
          for (var i = 0; i <= res.length; i++) {
            exp = false;
            // On parcour les éléments.
            for (var index in tt) {


              // console.log("WorgTableComponent | majData / expandable / tt[index] : ", tt[index]);
              // console.log("WorgTableComponent | majData / expandable / res[i][tt[index]] : ", res[i][tt[index]]);


              // On vérifie si l'élément ou non doit activé l'expandable.
              if (res[i] && res[i][tt[index]] && res[i][tt[index]] != null && res[i][tt[index]] != 'null') {
                //console.log("WorgTableComponent | majData / expandable / res[i]['id'] : ", res[i]['id']);
                //console.log("WorgTableComponent | majData / expandable / res[i] : ", res[i]);
                //console.log("WorgTableComponent | majData / expandable / res[i][tt[index]] : ", res[i][tt[index]]);

                exp = true;// Expandable activé
                this.optionsPlus[res[i]['id']] = exp;
                break;
              }
            }
            //if(res[i])this.optionsPlus[res[i]['id']] = exp;
           // console.log("WorgTableComponent | majData / expandable / ----------------------------------");

          }

        }
      }


     // console.log("WorgTableComponent | majData / expandable / this.optionsPlus : ", this.optionsPlus);
     // console.log("WorgTableComponent | majData / expandable / res : ", res);


      this.viewData = this.DATATAB = res;
      this.elementTotal = this.viewData.length;// Nombre d'élément total.




      //console.log("WorgTableComponent | majData / subscribe / res :", res);
      this.infoActualisation = true;
      this.startTimerInfo();


      // Mise à jour des Filtre select :
      this.selectDataMaj();


      // Vérication si les filtres sont utilisé :
      this.filterKeyEvent();


      // Récupération du nombre d'élément à affiché :
      this.viewDataLenght = this.viewData.length;


    } else {// Les données récupéré sont identique (aucune maj necessaire) :
      //console.log("WorgTableComponent | majData / subscribe / Pas de de MAJ");
      this.infoActualisation = false;
    }
  }


  formData$: Observable<any> | undefined;


  /**
   * selectDataMaj
   * Création et mis en place des filtres select :
   */
  selectDataMaj() {
    // Mise en place des données dans les filtres select :
    const group: any = {};
    //console.log("WorgTableComponent | selectDataMaj / this.viewData :", this.viewData);
    // Boucle sur les colonnes :
    Object.entries(this.Listecolumns).forEach(([key, value], index) => {

      // Vérification si les colonnes ont des filtres select :
      //console.log("WorgTableComponent | selectDataMaj / value.filterType :", value.filterType);
      //console.log("WorgTableComponent | selectDataMaj / value.filterSelectData :", value.filterSelectData);
      if (value.filterType == 'select') {
        //console.log("WorgTableComponent | selectDataMaj / value :", value);
        //console.log("WorgTableComponent | selectDataMaj / this.getSelectList() :", this.getSelectList());
        // Mise en place des datas pour les seleted :
        this.formData$ = this.getSelectList();// Envois les datas dans le form.
      }
    });
  }


  /**
   * getSelectList
   *
   * @returns
   */
  getSelectList(): Observable<any> {
    //console.log("WorgTableComponent | getSelectList / this.Listecolumns :", this.Listecolumns);
    //console.log("WorgTableComponent | getSelectList / this.ELEMENT_DATA :", this.ELEMENT_DATA);


    let element: any = [];
    // Boucle sur la liste des colonnes :
    Object.entries(this.Listecolumns).forEach(([key, value], index) => {
      //console.log("WorgTableComponent | getSelectList / Object / value :", value);


      // Mise en place des datas pour les seleted :
      if (value.filterType == 'select') {//&& value.filterSelectData == null
        if (value.filterSelectData == null) {
          const listData: any = [];

          // Récupération des datas parmis les datas encore affiché :
          Object.entries(this.ELEMENT_DATA).forEach(([key1, value1], index1) => {
            //console.log("WorgTableComponent | getSelectList / Object / value1[value.column] :", value1[value.column]);
            if (listData.includes(value1[value.column]) == false) listData.push(value1[value.column]);
          });
          var sortedArray: number[] = listData.sort((n1: any, n2: any) => n1 - n2);
          element[value.column] = sortedArray;// Récupération des données pour une colonne.
        } else {
          // Select avec les données dans les options :
          element[value.column] = value.filterSelectData;
        }
      }
    });
    //console.log("WorgTableComponent | getSelectList / Object / element :", element);
    return of(element);
  }


  /**
   * ngOnChanges
   * Si les données envoyé change :
   *
   * ELEMENT_DATA
   */

  ngOnChanges() {
    console.log("WorgTableComponent | ngOnChanges");

    if (this.tableOption && this.tableOption[0]['options']) {

      // Récupération des option du tableau :
      console.log('WorgTableComponent | ngOnChanges / this.tableOption[0] :', this.tableOption[0]);
      const option = this.tableOption[0];
     
      // optionInfosPlus  :
      this.optionInfosPlus  = {
        'sectionName': option['options']['sectionName'],
        'urlParent': option['options']['urlParent'],
        'import': {
          'importPipe':  option['options']['importPipe'],
          'importExpandable':  option['options']['importExpandable'],
          'importEdit':  option['options']['importEdit'],
        }
      };
      this.sectionName      = option['options']['sectionName'];

      // Timer :
      this.tableTimer       = option['options']['timer'];
      this.tableTimerTemps  = option['options']['timerTemps'];

      // paginator
      this.paginator = option['options']['paginator'];
      if (this.paginator) {
        if (option['options']['paginatorPageSize']) this.paginatorPageSize = option['options']['paginatorPageSize'];
        if (option['options']['paginatorMaxSize']) this.paginatorMaxSize = option['options']['paginatorMaxSize'];
      } else {
        this.paginatorPageSize = 10000;
      }

      this.infosNbElement     = option['options']['infosNbElement'];
      this.infosNbElementText = option['options']['infosNbElementText'];

      // expandable 
      this.expandabledOr      = this.expandabled = option['options']['expandabled'];
      this.expandableIf       = option['options']['expandableIf'];
      if (this.expandableIf && this.expandableIf.length > 0) this.expandableIfBo = true;
      this.expandableCol      = option['options']['expandableCol'];
      this.expandableColIco   = option['options']['expandableColIco'];

      this.optionAdd          = option['options']['dataAdd'];
      this.dataEdit           = option['options']['dataEdit'];
      this.tableAffichage   = option['options']['affichage'];
      this.urlParent        = option['options']['urlParent'];
      this.primaire         = option['options']['primaire'];
      this.filtre           = option['options']['filtre'];

      this.service = option['service'];// Service utilisé.
      this.Listecolumns = option['listeColumns'];// Liste des colonnes.

      // Récupération de l'option time si celle ci à été modifié.
      if (this.tableTimerTemps && this.timeLeft != this.tableTimerTemps) this.timeLeft = this.tableTimerTemps;
    }

    // Check if the data exists before using it
    if (this.ELEMENT_DATA) {
      // console.log("WorgTableComponent | ngOnChanges / this.ELEMENT_DATA :", this.ELEMENT_DATA);
      this.majData(this.ELEMENT_DATA);
      this.spinner = false;
      this.spinner0 = false;
    }
  }


  /**
   * findHiddenFalse : Pipe d'affichage ou non des colonnes (option/colonne/columnHidden).
   * @param list Pip
   * @returns
   */
  findHiddenFalse(list: any[]): any[] {
    //return list.filter(p => p.columnHidden === false);
    return list.filter(p => p.columnHidden === false);
  }

  /**
   * filterKeyEvent
   * Modifie l'affichage des données suivant le filter selectionné :
   *
   *
   * @param event
   */
  filterKeyEvent() {
    var testFilter = this.ELEMENT_DATA;


    // Récupération des infos des filtres :
    // console.log("WorgTableComponent | filterKeyEvent / this.form.value :", this.form.value);
    // console.log("WorgTableComponent | filterKeyEvent / this.Listecolumns :", this.Listecolumns);
    // console.log("WorgTableComponent | filterKeyEvent / this.form.value :", this.form.value);
    var filtreTest = false;
    Object.entries(this.form.value).forEach(([key, value], index) => {
      if (value != null && value != 'All' && value != undefined && value != '') {
        // console.log("WorgTableComponent | filterKeyEvent / ------------------key :", key);
        testFilter = testFilter.filter(p => {

          var tt2;
          if (p[key] != undefined) {
            filtreTest = true;
            //console.log("WorgTableComponent | filterKeyEvent / Object ******************");
            var search = this.Listecolumns.findIndex(obj => obj.column === key);
            //console.log("WorgTableComponent | filterKeyEvent / search :", search);
            // console.log("WorgTableComponent | filterKeyEvent / filterType :", this.Listecolumns[search].filterType);

            const tt = p[key].toLowerCase();
            tt2 = value.toString().toLowerCase();

            // console.log("WorgTableComponent | filterKeyEvent / Object / p :", p);
            // console.log("WorgTableComponent | filterKeyEvent / Object / tt2 :", tt2);
            // console.log("WorgTableComponent | filterKeyEvent /  tt === tt2 :", tt === tt2 );
            if (this.Listecolumns[search].filterType == 'select') {
              if (tt === tt2) {
                // console.log("WorgTableComponent | filterKeyEvent / VVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

                return tt;
              } else {
                return false;
              }
            } else {
              var tttt = tt.includes(tt2);
              if (tttt === true) {
                // console.log("WorgTableComponent | filterKeyEvent / VVVVVVVVVVVVVVVVVVVVVVVVVVVVV22222");
              }
              return tttt;
            }
          }
        });
      }
    });
    // console.log("WorgTableComponent | filterKeyEvent / filtreTest :", filtreTest);
    // console.log("WorgTableComponent | filterKeyEvent / testFilter :", testFilter);
    if (!filtreTest) {
      testFilter = this.ELEMENT_DATA;
    }
    this.viewData = testFilter;
    this.elementAffiche = this.viewData.length;// Nombre d'élément affiché.
    this.viewDataLenght = this.viewData.length;

    this.selectDataMaj();
    //console.log("WorgTableComponent | filterKeyEvent / testFilter :", testFilter);
  }


  /**
   *
   */
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  /**
   * Expandable
   */
  expandableData: string = "";
  expandableNb: number = 0;
  timerSave: number = 0;
  expandable(element: any) {
    console.log('WorgTableComponent | expandable / element :', element);
    console.log('WorgTableComponent | expandable / element.isExpand :', element.isExpand);
    if (element.isExpand) {
      this.expandableNb++;
    } else {
      this.expandableNb = this.expandableNb - 1;
    }

    if (this.expandableNb > 0) {
      this.timerSave = this.time;
      console.log('WorgTableComponent | expandable / 0 this.timerSave :', this.timerSave);
      clearInterval(this.interval);
    } else {
      console.log('WorgTableComponent | expandable / 1 this.timerSave :', this.timerSave);
      this.startTimer(this.timerSave);
    }
  }

  /**
   * element
   *
   * @param element
   */
  editAff: number | undefined;
  buttonFct(element: any, action: string, column: string = '') {
    console.log('WorgTableComponent | buttonFct / action : ', action);
    console.log('WorgTableComponent | buttonFct / element : ', element);
    console.log('WorgTableComponent | buttonFct / column : ', column);


    var fin = false;

    var data: ModelExport =
    {
      element: element,
      action: action,
      column: column
    };

    //
    if (action == 'delete') {
      console.log('WorgTableComponent | buttonFct / delete / data : ', data);
      this.action.emit(data);
      this.majDonnees();
    }

    // edit
    if (action == 'edit') {
      if (this.editAff != undefined) {
        this.editAff = undefined;
      } else {
        this.editAff = element[this.primaire];
        if (this.expandabledOr) this.expandabled = false;
      }
      fin = true;
      console.log('WorgTableComponent | buttonFct / edit / this.editAff : ', this.editAff);
    }

    // cancel :
    if (action == 'cancel') {
      this.editAff = undefined;
      if (this.expandabledOr) this.expandabled = true;
      fin = true;
    }


    // editValid || addValid
    if (action == 'editValid' || action == 'addValid') {
      if (element == null) {
        element = {};
      }
      // On parcour les colonnes (options) :
      Object.entries(this.Listecolumns).forEach(([key, value], index) => {
        // On récupère les types edit de chaque colonne :
        if (value.edit) {

          var res = (<HTMLInputElement>document.getElementById(value.column)).value;
          if (value.editType == 'custom') {
            res = JSON.parse(res);
          }
          element[value.column] = res;
        }
      });

      // On supprime l'element qui ne doit pas être enregistré :
      delete element.isExpand;
      // On envois les nouvelles données aux services :
      var data: ModelExport =
      {
        element: element,
        action: action,
        column: column
      };
      console.log('WorgTableComponent | buttonFct / valid / element : ', element);
      this.action.emit(data);
      // On reviens à une ligne d'affichage normal (ss bouton).
      this.editAff = undefined;
      // On met à jour les données pour l'affichage.
      this.majDonnees();
      if (action == 'addValid') {
        this.dataAdd = false;
      }
      this.expandabled = true;
      fin = true;
    }

    if (fin == false) {
      this.action.emit(data);
      //this.majDonnees();
      fin = true;
    }
  }

  /**
   * expandableAction
   *
   * @param element
   */
  expandableAction(element: any, expandable: boolean = false, optionInfosPlus: any) {
    console.log("WorgTableComponent | expandableAction");

    if (this.expandabled || this.expandableCol === false) {
      console.log("WorgTableComponent | expandableAction / element : ", element);
      console.log("WorgTableComponent | expandableAction / optionInfosPlus : ", optionInfosPlus);

      const expandableCol = this.tableOption[0]['options']['expandableCol'];

      console.log("WorgTableComponent | expandableAction / this.optionsPlus : ", this.optionsPlus);
      console.log("WorgTableComponent | expandableAction / this.optionsPlus[element['id'] : ", this.optionsPlus[element['id']]);
      // console.log("WorgTableComponent | expandableAction / this.expandableIf : ", this.expandableIf.length)

      // Vérification si le expandable est lié à la colonne :
      if (expandable || expandableCol == false || this.expandableCol === false) {
        console.log("WorgTableComponent | expandableAction / 111111111111111111111111");
        // Pour l'affichage spécifique :
        if (this.expandableIf && this.expandableIf.length > 0) {

          if (this.optionsPlus[element['id']]) {
            console.log("WorgTableComponent | expandableAction / aaaaaaaaaaaa");
            element.isExpand = !element.isExpand;
            this.expandable(element);
          }
          console.log("WorgTableComponent | expandableAction / 222222222222222");
        } else {
          console.log("WorgTableComponent | expandableAction / 33333333333");
          element.isExpand = !element.isExpand;
          this.expandable(element);
        }
      }
    }
  }
}