import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checknull'
})
export class ChecknullPipe implements PipeTransform {

  transform(value: any,args?:any): any {
    return (value == undefined || value ==null?'-':value);
  }

}
