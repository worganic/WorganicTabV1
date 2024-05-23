# WorganicTabV1 - https://github.com/worganic/WorganicTabV1/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Description

Mise en place d'un composant maitre permettant de créé le plus facilement et rapidement possible un tableau avec un maximum d'option possible (affichage (pipe, expandable...), gestion (edit del...)...).
Et que ce tableau puisse être configurable et modiable à volonté...

## Utilisation

Je laisse toute possibilité d'utiliser gratuitement mon composant et de le modifier pour un cadre personnel mais aussi professionel, ce code ne pourra être revendu en tans que tel (hors intégration complète dans un projet).

## Branch :

Main -> Commit initial (V25 - Table/Heritage/Nettoyage).
branch-0001-Add-menu -> Mise en place d'un composant menu wor-menu.

## Date :

Début : 2024-01
Fin : 2024-02-29

## Version système 
- Node : 
    > node -v
        v18.16.1
- Npm :
    > npm -v
        9.5.1
- Angular cli
    > ng v
        Angular CLI: 16.2.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development server json

Run `json-server --watch db.json` for a dev server. Navigate to `http://localhost:3000/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Get clone 

> https://github.com/worganic/WorganicTabV1.git
> npm install
Terminal 1 :
    > cd .\worganic-tab\
    > json-server --watch db.json
Terminal 2 :
    > cd .\worganic-tab\
    > ng serve

## Project :


                
## Problème à résoudre :

    - 2023 | Update (worg) => Petit default sur le design...
    - 2024-02-26 | Update (worg-tab) => expandable col option : vérifié si elle s'affiche ou non lorsqu'on n'en à pas besoin (data = vide) :  optionsPlus[element['id']] ? ... : false"

## Infos plus :
   
## Update

## Historique :

2024-02-26 | Branch Initial -> Récupération du dev 25 vers WorganicTabV1

## Ressource pour cette branch :

##  A mettre en place :

- Fait - 2024-02-28 -> 2024-02-28 | Update (worg) => Améliorer le design du menu...

- 2024-02-29 | Projet (worg-menu) => Mise en place d'un composant menu permettant de créé un menu automatique horizontal à au moins 2/3 niveaux.
- 2024-02-26 | Update (worg-tab) => Mise en place d'une option tri par colonne.
- 2024-02-26 | Update (worg-tab) => Amélioré le système et mettre en place les signals et faire disparaitre (si possible) "ngOnChanges".
- 2024-02-28 | Update (worg-tab) => Voir si on peux rajouté dans les options le service de récupération des datas afin de supprimé la partie getData() dans le composant mère.

- ...

## Abouts

created by Johann Loreau
create at 2023/08/18
Le project évolura suivant les remarques et conseils des visiteurs.