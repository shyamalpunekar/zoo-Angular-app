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

  <ul>
    <div *ngFor = "let currentAnimal of childAnimalList | ageFilter:filterByAge" >
    <div class="col-md-4">
    <div class="well">
    <div *ngFor = "let animal of childAnimalList | ageFilter:filterByAge"  >
      <h3> Species: {{animal.species}} </h3>
      <h4> Name: {{animal.name}}</h4>
      <h5> Age: {{animal.age}}</h5>
      <h5> Diet: {{animal.diet}} </h5>
      <h5> Location: {{animal.location}} </h5>
      <h5> Number of Caretakers: {{animal.caretakers}} </h5>
      <h5> gender: {{animal.gender}} </h5>
      <h5> Likes: {{animal.likes}} </h5>
      <h5> Dislikes: {{animal.dislikes}} </h5>
      <button (click)="editButtonHasBeenClicked(animal)">Edit Animal Attributes</button>
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
