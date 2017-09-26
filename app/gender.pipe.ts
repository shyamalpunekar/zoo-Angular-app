import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: "gender",
  pure: false
})

export class genderPipe implements PipeTransform{
  transform(input: Animal[], genderFilter){
    var output: Animal[] = [];
    if(genderFilter === "female"){
      for(var i = 0; i < input.length; i++){
        if(input[i].gender === "female"){
          output.push(input[i]);
        }
      }return output;
    }else if(genderFilter === "male"){
      for (var i = 0; i < input.length; i++){
        if (input[i].gender === "male"){
          output.push(input[i]);
        }
      }return output;
    }else{
      return input;
    }
  }
}
