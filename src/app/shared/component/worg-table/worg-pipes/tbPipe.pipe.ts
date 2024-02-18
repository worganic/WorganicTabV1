import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tbPipe',
  standalone: true,
})
export class TbPipe implements PipeTransform {

  /**
   *
   * @param value // Valeur de la colonne.
   * @param columnName // Nom de ma colonne.
   * @param pipe // True si le pipe est utilisé.
   * @param element // Ensemble des données de la ligne.
   * @returns
   */
  async transform(value: string, columnName: string, pipe?: boolean, element?: any, optionInfosPlus?: any) {

    const importPipe = optionInfosPlus['import']['importPipe'];// On récupert l'import des pipes.
    if (pipe == true && columnName != '') {// Si la colonne à un pipe dédié.
      var ret = value;// Par defaut on retourne value.

      if(value != undefined){
        // OIn récupère les méthodes :
        const methodePipe = (await importPipe).Pipe.prototype;
        try {
          ret = methodePipe['fct'](columnName, value, element, optionInfosPlus);
          //console.log("TbPipe | transform /ret : ", ret);
        } catch (error) {
          console.error("Pipe - Error : Le fichier pipe n'a pas été trouvé, merci de vérifié la valeur de sectionName ou le fichier pipeListe.ts ");
        }
      }
      return ret;
    } else {// Sinon on renvois la donnée pure.
      return value;
    }
  }
}