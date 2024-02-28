
export class Pipe {

  // Function de base (A ne pas modifer) :
  fct(columnName: string, value: any, element: any, optionInfosPlus: any) {
    var res = this[columnName as keyof typeof this](columnName, value, element);
    return res;
  }

  /** 
   * firstName :
   *  
   */
  firstName(columnName: string, value: any, element: any, optionInfosPlus: any): string {
    var tt = "";
    return "<a href='http://www.google.fr' target='_blank'>" + value + '/ </a> (' + element['id'] + ')';
  }

  /** 
   * date :
   *  
   * 
   */
  date(columnName: string, value: any, optionInfosPlus: any): string {
    var val = value[0];
    return '<div>' + val['dateDeb'] + '</div><div>' + val['dateFin'] + '<div>';
  }

}