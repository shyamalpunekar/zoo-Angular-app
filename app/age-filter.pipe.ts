import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "ageFilter",
  pure: false
})

export class AgeFilterPipe implements PipeTransform {

}
