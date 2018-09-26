import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserDetails'
})

export class FilterUserDetailsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }
//ng g component component-name --skip-import
}
