import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from "./animal.model";

@Pipe({
  name: 'diet',
  pure: false
})

export class Diet implements PipeTransform{
  transform(input: Animal[], dietFilter){
    var output: Animal[] = [];
    if(dietFilter === 'Carnivore'){
      for(var i= 0; i < input.length; i++){
        if(input[i].diet === 'Carnivore'){
            output.push(input[i]);
        }
    }return output;
  }else if(dietFilter === 'Omnivore'){
    for(var i= 0; i < input.length; i++){
      if(input[i].diet === 'Omnivore'){
          output.push(input[i]);
      }
  }return output;
}else if(dietFilter === 'Herbivore'){
  for(var i= 0; i < input.length; i++){
    if(input[i].diet === 'Herbivore'){
        output.push(input[i]);
    }
}return output;
}
}
