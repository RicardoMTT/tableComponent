import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], column: string, order: string = 'asc'): any {
    return value.sort((a, b) => {
      if (typeof a[column.split('.')[0]] === 'object') {
        //Obtenemos los valores de las propiedades column de los elementos a y b que se estan comparando
        const elements = column.split('.');
        const first = a[elements[0]] && a[elements[0]][elements[1]];
        const second = b[elements[0]] && b[elements[0]][elements[1]];
        if (first && second) {
          if (first.toLowerCase() < second.toLowerCase()) {
            return order === 'asc' ? -1 : 1;
          }
          if (first.toLowerCase() > second.toLowerCase()) {
            return order === 'asc' ? 1 : -1;
          }
          return 0;
        }
        return 0;
      } else {
        let valorA = a[column];
        let valorB = b[column];
        if (valorA < valorB) {
          return order === 'asc' ? -1 : 1;
        }
        if (valorA > valorB) {
          return order === 'asc' ? 1 : -1;
        }
        return 0;
      }
    });
  }
}
