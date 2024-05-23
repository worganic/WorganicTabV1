import { Component } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-worgMenuTuto',
  templateUrl: './worgMenuTuto.component.html',
  styleUrls: ['./worgMenuTuto.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, CommonModule ]
})
export class WorgMenuTutoComponent {

  // http://route63.free.fr/divers/codage-texte-html-iso-specialchars-decodage/
  // données :
  infos: any;
  infos2: any;

 

  ngOnInit(): void {
    console.log("WorgMenuTutoComponent | ngOnInit" );

    this.infos2 = [
        {
          'title': " 111",
        
        },{
          'title': " 2222 :",
        
        }
      ];

     this.infos = 
      {
        'title': " Menu de base :",
        'zone1': [
          {
            'title': " Code de menu :",
          },
          {
            'title': " Code de menu :",
            'code': `<div class="ligne1" >
            <ul class="menu">
              <li [class.is-open]="isMenuOpen">
                <a class="menu-item" [class]="menuLigne2=='' ? 'menuActive1' : ''" routerLink="/" (click)="menu('')"> Home </a> -
              <!-- <a class="menu-item" routerLink="/divers/Presentation"> Présentation </a> --->
                <a class="menu-item" [class]="menuLigne2=='projets' ? 'menuActive1' : ''" (click)="menu('projets')"> Projets </a> -
                <a class="menu-item" [class]="menuLigne2=='tutos' ? 'menuActive1' : ''" (click)="menu('tutos')"> Tutos </a> -
                <a class="menu-item" [class]="menuLigne2=='abouts' ? 'menuActive1' : ''" routerLink="/divers/abouts" (click)="menu('abouts')"> Abouts </a> -
              </li>
            </ul>
          </div>
          <div class="ligne2">
            <div *ngIf="menuLigne2=='projets'">
              <a class="menu-item" [class]="menuLigne3=='tabUsers' ? 'menuActive' : ''" (click)="menu2('tabUsers')"  routerLink="/projets/worgtab/users"> Tab Users </a> -
              <a class="menu-item" [class]="menuLigne3=='multiple' ? 'menuActive' : ''" (click)="menu2('multiple')" routerLink="/projets/worgtab/multiple"> Tab Multiple </a>
            </div>
            <div *ngIf="menuLigne2=='tutos'">
              <a class="menu-item" [class]="menuLigne3=='st2' ? 'menuActive' : ''" (click)="menu2('st2')" routerLink="/tutos/st2"> St2-route </a> -
              <a class="menu-item" [class]="menuLigne3=='st3' ? 'menuActive' : ''" (click)="menu2('st3')" routerLink="/tutos/st3"> St3-Structure </a> -
              <a class="menu-item" [class]="menuLigne3=='st3' ? 'menuActive' : ''" (click)="menu2('st3')" routerLink="/tutos/st3"> St3-Structure </a> -
              <a class="menu-item" [class]="menuLigne3=='Design' ? 'menuActive' : ''" (click)="menu2('Design')" routerLink="/tutos/design"> Design </a> -
              <a class="menu-item" [class]="menuLigne3=='Injected' ? 'menuActive' : ''" (click)="menu2('Injected')" routerLink="/tutos/injected"> Injected </a> -
              <a class="menu-item" [class]="menuLigne3=='NgBootstrap' ? 'menuActive' : ''" (click)="menu2('NgBootstrap')" routerLink="/tutos/ngbootstrap"> NgBootstrap </a>
            </div>
            <div *ngIf="menuLigne2=='autres'">
              <a class="menu-item" [class]="menuLigne3=='Abouts' ? 'menuActive' : ''" (click)="menu2('Abouts')" routerLink="/autres/abouts"> Abouts </a> - 
              <a class="menu-item" [class]="menuLigne3=='Design' ? 'menuActive' : ''" (click)="menu2('Design')" routerLink="/error/alertes"> Design</a> 
            </div>
          </div>`,
            'path': 'src\app\app.component.html',
          },
          {
            'code': `          
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
              }`,
            'path': ['src\app\app.component.ts'],
          },
        ],
        'zone2': [
          {
            'title': "",
            'infos': `<p>Ce menu est plutôt classique.
            Celà utilise (click) et [class] et *ngIf.</p>
            <ul>
              <li>(click) : Event binding - <a href="http://angular.io/guide/event-binding" target="_blank">http://angular.io/guide/event-binding</a></li>
              <li>[class] : Class and style binding - <a href="https://angular.io/guide/class-binding" target="_blank">https://angular.io/guide/class-binding</a></li>
              <li>*ngIf : DIRECTIVE - <a href="https://angular.io/api/common/NgIf" target="_blank">https://angular.io/api/common/NgIf</a></li>
            </ul>
            <p>La fichier ts contient les functions menu et menu1 pour récupéré le nom du menu cliqué.</p>`,
            'link': "",
            'path': ""
          },
        ]
      },
      {
        'title': "Création du composant worgMenu",
        'zone1': [
          {
            'title': "",
            'code': ``
          },
        ],
        'zone2': [
          {
            'title': "On crait les fichiers du nouveau composant menu",
            'infos': `<ul>
              <li>worg-menu.component.html</li>
              <li>worg-menu.component.csss</li>
              <li>worg-menu.component.ts</li>
              <li>worg-menu.component.spec.ts</li>
            </ul>`,
            'link': "",
            'path': [],
          },
        ]
      },
      {
        'title': "Déplacement des données de app.component.html vers worg-menu.component.html",
        'zone1': [
          {
            'title': "",
            'code': ``
          },
          {
            'code': ``,
            'path': [],
          }
        ],
        'zone2': [
          {
            'title': "",
            'infos': [`<p class="path">src\app\app.component.html</p>
              <p>vers</p>
              <p class="path">src\app\app.component.html</p>`,
              'Copie du code'
            ],
            'link': "",
            'path': [],
          },
        ]
      },
      {
        'title': "Ajout du composant dans app.component.html",
        'zone1': [
          {
            'title': "",
            'code': `<app-worgMenu [menuListe]="menuListe"></app-worgMenu>`,
            'path': `src\app\app.component.html`
          },
          {
            'code': `import { WorgMenuComponent } from 'src/app/shared/component/worg-menu/worg-menu.component';
            ...
            Input() menuListe!: any;`,
            'path': ["src\app\app.component.ts"],
          }
        ],
        'zone2': [
          {
            'title': "",
            'infos': `<p>On supprime l'ancien code et on, le remplace par le nouveau composant</p>
            <p>On rajoute l'import et l'input pour récupéré le nouveau menu.</p>
            <p>A ce moment là le menu doit être toujours visible.</p>`,
            'link': "",
            'path': [],
          },
        ]
      },
      {
        'title': "On crait le nouveau menu dans le fichier fille :",
        'zone1': [
          {
            'code': ``,
            'path': ["src\app\app.component.ts"],
          }
        ],
        'zone2': [
          {
            'title': "",
            'infos': `A partir de là, le menu est désormais directement dans le composant worg-menu. 
            Il faut maintenant créé le menu dans le composant enfant et l'envoyer au composant mère.
            PS: on n'oublis pas de faire les imports...  `,
            'link': "",
            'code': ">import  RouterOutlet, RouterLink  from '/@angular/router';",
            'path': ["src\app\shared\component\worg-menu\worg-menu.component.scss",
          "src\app\shared\component\worg-menu\worg-menu.component.ts"],
          },
        ]
      },
      {
        'title': "Je crait le menu dans le composant fille.",
        'zone1': [
          {
            'title': "",
            'code': ``
          },
          {
            'code': ``,
            'path': [],
          }
        ],
        'zone2': [
          {
            'title': "",
            'infos': ``,
            'link': "",
            'code': "this.menuListe ...",
            'path': ['src\app\app.component.ts'],
          },
        ]
      },
      {
        'title': "Je récupère le menu dans le composant mère.",
        'zone1': [
          {
            'title': "",
            'code': ``
          },
          {
            'code': ``,
            'path': [],
          }
        ],
        'zone2': [
          {
            'title': "src\app\shared\component\worg-menu\worg-menu.component.ts",
            'infos': ``,
            'code': "Input() menuListe!: any[]; ...",
            'path': [],
          },
        ]
      },
      {
        'title': "Je tranforme le fichier html pour créé les boucles qui afficheront le menu.",
        'zone1': [
          {
            'title': "",
            'code': ``,
            'path': [""],
            'link': [""],
          },
          {
            'title': "",
            'code': ``,
            'path': [""],
            'link': [""],
          }
        ],
        'zone2': [
          {
            'title': "",
            'infos': `Je crait le menu 0 et le menu 1`,
            'code': `...li *ngFor="let item of menuListe | keyvalue">/li>...`,
            'link': [""],
            'path': ["src\app\shared\component\worg-menu\worg-menu.component.html"],
          },
        ]
      },
      {
        'title': `Je met à jour le fichier ts pour la gestion des clicks.`,
        'zone1': [
          {
            'title': ``,
            'code': ``,
            'path': [""],
            'link': [""],
          },
          {
            'title': ``,
            'code': ``,
            'path': [""],
            'link': [""],
          }
        ],
        'zone2': [
          {
            'title': ``,
            'infos': `La prochaine étape sera de mettre en place le niveau 3`,
            'code': `...menu niveau 0...`,
            'link': [""],
            'path': ["src\app\shared\component\worg-menu\worg-menu.component.ts"],
          },
        ]
      },
      {
        'title': `Je rajoute la function asIsOrder.`,
        'zone1': [
          {
            'title': ``,
            'code': ``,
            'path': [""],
            'link': [""],
          },
          {
            'title': ``,
            'code': ``,
            'path': [""],
            'link': [""],
          }
        ],
        'zone2': [
          {
            'title': ``,
            'infos': `Afin de ne pas trié les menus par ordre croissant mais laissé le choix à l'utilisateur, j'ai rajouté cette function.`,
            'code': `...asIsOrder() ...`,
            'link': [""],
            'path': ["src\app\shared\component\worg-menu\worg-menu.component.ts"],
          },
          {
            'title': ``,
            'infos': `Afin de ne pas trié les menus par ordre croissant mais laissé le choix à l'utilisateur, j'ai rajouté cette function.`,
            'code': `...let item of menuListe | keyvalue: asIsOrder; let i=index...`,
            'link': ["http://github.com/angular/angular/issues/42490"],
            'path': ["src\app\shared\component\worg-menu\worg-menu.component.html"],
          },
        ]
      },





      {
        'title': ``,
        'zone1': [
          {
            'title': ``,
            'code': ``,
            'path': [""],
            'link': [""],
          },
          {
            'title': ``,
            'code': ``,
            'path': [""],
            'link': [""],
          }
        ],
        'zone2': [
          {
            'title': ``,
            'infos': ``,
            'code': ``,
            'link': [""],
            'path': [""],
          },
        ]
      };
  }

  /*
   * This is used to override the default comparator function of keyvalue pipe in angular - https://angular.io/api/common/KeyValuePipe 
   */
    asIsOrder() {
      return 0;
    }

    typeOf(co: any){
      return typeof co;
    }
}
