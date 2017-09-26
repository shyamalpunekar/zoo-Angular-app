import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "diet",
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], desiredFilter) {
    var output: Animal[] = [];

    if (desiredFilter == "plants"){
      for (var i=0; i<input.length; i++) {
        if(input[i].diet == "Herbivore"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "meat"){
      for (var i=0; i<input.length; i++) {
        if(input[i].diet == "Carnivore"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "both"){
        for (var i=0; i<input.length; i++) {
          if(input[i].diet == "Omnivore"){
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}
