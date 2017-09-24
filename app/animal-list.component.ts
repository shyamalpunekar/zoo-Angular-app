import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div id="animalList">
  <h3>Select an option below:</h3>
  <select (change)="onFilterAgeChange($event.target.value)">
      <option value="" selected disabled>Select Animal By Age</option>
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="oldAnimals">Old Animals</option>
 </select>
 </div>
 <hr>
 <div id="food">
 <select (change)="onFilterFoodChange($event.target.value)">
        <option value="" selected disabled>Select Based on Food Eaten</option>
        <option value = "Herbivore"> Herbivores</option>
        <option value = "Carnivore"> Carnivores</option>
        <option value = "Omnivore"> Omnivores</option>
        <option value="allAnimals">All Animals</option>
</select>
</div>
<hr>
  <ul>
    <div *ngFor = "let currentAnimal of childAnimalList | ageFilter:filterByAge | diet:dietFilter" >
    <div class="col-md-4">
    <div class="well">
        <h3>Species: {{currentAnimal.species}} </h3>
        <h4>Name: {{currentAnimal.name}}</h4>
        <h4>Diet: $ {{currentAnimal.diet}}</h4>
        <h4>:Locations: {{currentAnimal.location}} </h4>
        <h4>: {{currentAnimal.numCare}}</h4>
        <h4> Sex: {{currentAnimal.sex}} </h4>
        <h4> Likes: {{currentAnimal.likes}} </h4>
        <h4> Dislikes: {{currentAnimal.dislikes}} </h4>

        <a href="#editAnimal"><button class="btn" id="buttonControl" (click)="editButtonHasBeenClicked(currentAnimal)">Edit
       {{currentAnimal.name}}</button></a>

    </div>
    </div>
   </div>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";
  filterByDiet: string = "allAnimals";

  editButtonHasBeenClicked(clickedAnimal: Animal){
    this.clickSender.emit(clickedAnimal);
  }

  onFilterFoodChange(dietOption){
    this.filterByDiet = dietOption;
  }

  onFilterAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  }
