# WorganicTabV1 / v25 ! Table/Heritage/Nettoyage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development server json

Run `json-server --watch db.json` for a dev server. Navigate to `http://localhost:3000/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Get clone 
> https://github.com/worganic/TutoTab-St24-tableEditPersonnalise.git
> npm install
> cd .\worganic-tab-v24\
> ng serve

## Project :
v25 - Tableau -> heritage

    - Modification de db.json :
        ajout de blocs et class.

    - Nettoyage

    - 2024-02-17 - Changement pour GitLab, je fonctionnerais désormais en branche...

    - 2024-02-17 - Changement dans les fichiers cibles :
        * editListe.ts
        * expandableListe.ts
        * pipeListe.ts
    Je vais essayer de supprimé ses fichiers pour ne plus avoir de fichier parasite entre le component worg-table et les composant enfants.
    - Je commence par pipeListe.ts
        src\app\component\editListe.ts
        Il est appelé par :
        src\app\shared\component\worg-table\worg-pipes\tbPipe.pipe.ts
        à la ligne 26 :
        let pipeListe = await import('src/app/component/pipeListe');
        Ce lien doit provenir des paramètres du component et non d'un lien absolu (src/app/component/pipeListe).
        Le component qui appel worg-table (exemple UsersComponent) contient dans ses paramètres son propre lien : urlParent
        Je doit donc récupérer cette élément et le founir à tbPipe.pipe.ts

        Je rajoute les 3 paramètres dans mon component user :
            'importPipe': import( "src/app/component/users/pipe/pipe"),
            'importExpandable': ExpandedComponent,
            'importEdit': EditComponent
        Et je fait les imports pour Exapandable et Edit.
        !! Je verrais plus tard si je peux rendre plus dynamique cette import.
        On rajoute ce paramètres dans worg-tab -> 
            ...this.optionInfosPlus  = {
                'sectionName': option['options']['sectionName'],
                'urlParent': option['options']['urlParent'],
                'import': {
                    'importPipe':  option['options']['importPipe'],
                    'importExpandable':  option['options']['importExpandable'],
                    'importEdit':  option['options']['importEdit'],
                }
            };
        Je rajoute le paramètre optionInfosPlus dans l'appel au component dans la template worg-tab :
            ...[innerHTML]="element[column.column] | tbPipe:column.column:column.pipe:element:optionInfosPlus | async"
            ...<app-expandable [expandableOptions]="[element, sectionName, optionInfosPlus]"></app-expandable>
            ...<worg-edit [editOptions]="[null, sectionName, column.column, optionInfosPlus]"></worg-edit>
        Cela permettra de récupérer les imports provenant du fichier parent user.

        Dernière chose, je met à jours les fichiers suivant (ménage et récupération de optionInfosPlus) :
            src\app\shared\component\worg-table\worg-pipes\tbPipe.pipe.ts
            src\app\shared\component\worg-table\worg-expandable\expandable.component.ts
            src\app\shared\component\worg-table\worg-edit\worg-edit.component.ts
        Je supprime toutes les liaisons avec les fichiers liste et je raccorde à optionInfosPlus.
           
        Désormais on peux supprimer les fichiers liste :
            src\app\component\editListe.ts
            src\app\component\expandableListe.ts
            src\app\component\pipeListe.ts
        PS: je laisse le fichier exapandableListe, pour l'exemple de child.


## Problème à résoudre :
    Petit default sur le design, comme d'hab...

## Infos plus :
   
## Update

## Historique :
Avant -> v24 - Tableau -> edit - personnalise
Après -> v26 - 

## Ressource :
    -


## Abouts
created by Johann Loreau
create at 2023/08/18
Le project évolura suivant les remarques et conseils des visiteurs.