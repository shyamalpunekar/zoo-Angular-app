import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "maturity",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredFilter) {
    var output: Animal[] = [];

    if (desiredFilter == "young"){
      for (var i=0; i<input.length; i++) {
        if(input[i].age < 2){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "old"){
      for (var i=0; i<input.length; i++) {
        if(input[i].age >= 2){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
