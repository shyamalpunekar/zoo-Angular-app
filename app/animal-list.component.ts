import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onFilterAgeChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="oldAnimals">Old Animals</option>
 </select>
 <hr>
 <select (change)="onFilterLocationChange($event.target.value)">
     <option value="allLocations" selected="selected">All Locations</option>
     <option value="elephantHouse">Elephant House</option>
     <option value="asia">Asia</option>
</select>
<hr>
  <ul>
    <div *ngFor = "let animal of childAnimalList | ageFilter:filterByAge" >
    <div class="col-md-4">
    <div class="well">
        <h3>: {{animal.species}} </h3>
        <h4>: {{animal.name}}</h4>
        <h4>: $ {{animal.diet}}</h4>
        <h4>: {{animal.location}} </h4>
        <h4>: {{animal.numCare}}</h4>
        <h4> Sex: {{animal.sex}} </h4>
        <h4> Likes: {{animal.likes}} </h4>
        <h4> Dislikes: {{animal.dislikes}} </h4>

         <button (click)="editAnimalClicked(animal)">Edit Animal details</button>
        
    </div>
    </div>
   </div>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childKegList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() pourClickedSender = new EventEmitter();
  filterByRemainingPints: string;
  filterByPrice: string;

  ABVColor(keg){
    if (keg.ABV <= 5 ){
      return "light";
    } else if(keg.ABV > 5 && keg.ABV <= 7) {
      return "medium";
    } else if (keg.ABV > 7){
      return "strong";
    }
  }
  editKegClicked(clickedKeg: Animal){
    this.clickSender.emit(clickedKeg);
  }

  pourPint(clickedKeg){
    if (clickedKeg.remainingPints > 0) {
      clickedKeg.remainingPints--
    }
  }
  onFilterChange(optionFromMenu){
    this.filterByRemainingPints = optionFromMenu;
  }
  onFilterPriceChange(optionFromMenu){
    this.filterByPrice = optionFromMenu;
  }

  pourGrowler(clickedKeg){
    if(clickedKeg.remainingPints > 2) {
      clickedKeg.remainingPints = clickedKeg.remainingPints -2;
    }
  }
}
