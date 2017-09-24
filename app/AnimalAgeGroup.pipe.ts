import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'AnimalAgeGroup',
  pure: false
})

export class AnimalAgeGroup implements PipeTransform{
  transform(input: Animal[], ageFilter){
  var output: Animal[] =[];
  if(ageFilter === 'lessThanTwo'){
    for(var i = 0; i < input.length; i++){
      if(input[i].age <=2){
        output.push(input[i]);
      }
    }return output;
  }else if(ageFilter === 'greaterThanTwo'){
    for(var i = 0; i < input.length; i++){
      if(input[i].age <=2){
        output.push(input[i]);
      }
    }return output;
}else {
  return input;
}
}
