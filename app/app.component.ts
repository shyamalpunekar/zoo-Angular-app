import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `

  <div class="well">
    <h3>Welcome to Zoo</h3>
    <h4> Would you like to Add New Animal, Please, scroll Down!</h4>
    <img src="/resources/images/background.jpg" alt="Picture of an zoo"/>
    <hr>


    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

    <hr>

     <new-animal (newAnimalSender)="addAnimal($event)">Add New Animal</new-animal>


    <edit-animal [childSelectedAnimal]="selectedAnimal" (editDoneButtonClickedSender)="doneEditing()"> </edit-animal>
  </div>
  `
})

export class AppComponent{

  masterAnimalList: Animal[] = [
    new Animal('Tiger', 'King', 4, 'carnivorous', 'meat', 3, 'Female', 'looking for meat', 'entertainment'),
    new Animal('Polo bear', 'Polo', 8, 'Omnivore', 'fish', 5, 'Male', 'swimming', 'looking around'),
    new Animal(' giraffe', 'Gif', 5, 'herbivorous', 'plants', 2, 'Female', 'eating', 'walking'),
    new Animal(' monkey', 'Monk', 1, 'herbivorous', 'plants and fruits', 1, 'Female', 'eating', 'scrubbing')
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  doneEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
