import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div id="animalList">
  <h3>Select an option below:</h3>
  <select (change)="onFilterAgeChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="young">Young Animals</option>
      <option value="old">Old Animals</option>
 </select>
 </div>
 <hr>

    <div class="well">
    <div *ngFor = "let currentAnimal of childAnimalList | ageFilter:filterByAge"  >
      <h3> Species: {{currentAnimal.species}} </h3>
      <h4> Name: {{currentAnimal.name}}</h4>
      <h5> Age: {{currentAnimal.age}}</h5>
      <h5> Diet: {{currentAnimal.diet}} </h5>
      <h5> Location: {{currentAnimal.location}} </h5>
      <h5> Number of Caretakers: {{currentAnimal.caretakers}} </h5>
      <h5> gender: {{currentAnimal.gender}} </h5>
      <h5> Likes: {{currentAnimal.likes}} </h5>
      <h5> Dislikes: {{currentAnimal.dislikes}} </h5>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal Attributes</button>
    </div>
    </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string;


  editButtonHasBeenClicked(clickedAnimal: Animal){
    this.clickSender.emit(clickedAnimal);
  }

  onFilterAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }



  }
