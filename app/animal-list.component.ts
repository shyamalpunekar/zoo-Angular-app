import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="agePreference">
    <label>Would you like to see Young or Old Animals? Please choose one of the option below</label><br>
    <select (change)="onFilterAgeChange($event.target.value)">
      <option value="allAnimals" class = "selectText" selected="selected">All Animals</option>
      <option value="young">Young Animals(less than 2)</option>
      <option value="old">Mature Animals(greater than 2)</option>
     </select>
   </div>
   <hr>
   <div class="dietPreference">
    <label>Would you like to see Animals who eats plants or meat or both? Please choose one of the option below.</label><br>
    <select (change)="onFilterDietChange($event.target.value)">
       <option value="allAnimals" selected="selected" class="selectText">All Animals</option>
       <option value="plants">Plant</option>
       <option value="meat">Meat</option>
       <option value="both">Both</option>
    </select>
  </div>
<hr><br>
  <ul>
    <div *ngFor = "let animal of childAnimalList | maturity:filterByAge | diet:filterByDiet" >
      <div class = "container">
      <div class="col-md-8">

          <h3> Species: {{animal.species}} </h3>
          <h4> Name: <strong> {{animal.name}}</strong></h4>
          <h4> Age: {{animal.age}} years old </h4>
          <h4> Description: {{animal.description}} </h4>
          <h4 [class]="dietColor(animal)"> Diet: {{animal.diet}} </h4>
          <h4> Location: {{animal.location}} </h4>
          <h4> Number of Caretakers: {{animal.numCaretaker}} </h4>
          <h4> Gender: {{animal.gender}} </h4>
          <h4> Likes: {{animal.likes}} </h4>
          <h4> Dislikes: {{animal.dislikes}} </h4>
          <h4 id="editText"> Would you like to Edit existing Animal Details? Click on Edit button and please, scroll Down!</h4>

          <button class="btn btn-primary" (click)="editAnimalClicked(animal)">Edit</button>

          <hr>
      </div>
    </div>
   </div>
  </ul>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() editAnimalClickedSender = new EventEmitter();
  filterByAge: string;
  filterByDiet: string;

  dietColor(animal){
    if (animal.diet == "Carnivore" ){
      return "red";
    } else if(animal.diet == "Herbivore") {
      return "green";
    } else if (animal.diet == "Omnivore"){
      return "blue";
    }
  }

  editAnimalClicked(clickedAnimal: Animal){


    this.editAnimalClickedSender.emit(clickedAnimal);
  }

  onFilterAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }
  onFilterDietChange(optionFromMenu){
    this.filterByDiet = optionFromMenu;
  }

}
