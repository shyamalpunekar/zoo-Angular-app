import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "pricey",
  pure: false
})

export class AgeFilterPipe  {

}
