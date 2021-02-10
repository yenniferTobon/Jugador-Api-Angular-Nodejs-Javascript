import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNull'
})
export class PipeNullPipe implements PipeTransform {

  transform(value: unknown): string {
    return 'Null';
  }

}
