import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatus'
})
export class UserstatusPipe implements PipeTransform {

  transform(item: unknown, ...args: unknown[]): unknown {
    if (item === 'A')
    {
      return 'Active';
    }
    else if (item === 'D')
    {
      return 'Disabled';
    }
    else
    {
      return "Invalid Status!!!";
    }
  }

}
