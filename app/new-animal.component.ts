import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="!showNewAnimalForm">
    <button (click)="newAnimalButtonClicked()">Add a New Animal</button>
  </div>

  <div *ngIf="showNewAnimalForm" class="newAnimalForm">
    <h1>New Animal</h1>
    <div>
        <label>Enter Animal Species:</label>
       <input #newSpecies>
       <label>Enter Animal Name:</label>
       <input #newName>
       <br>
       <label>Enter Animal Age:</label>
       <input #newAge>
       <br>
       <label>Enter Animal Diet:</label>
       <input #newDiet>
       <br>
       <label>Enter Animal Location:</label>
       <input #newLocation>
       <br>
       <label>Enter Animal Sex:</label>
       <input #newSex>
       <br>
       <label>Enter Animal Likes:</label>
       <input #newLikes>
       <br>
       <label>Enter Animal dislikes:</label>
       <input #newDislikes>
       <br>
       <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newNumCare.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newNumCare.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; ">Admit New Animal</button>
       <br>
     </div>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  showNewAnimalForm : boolean;

  submitForm (newSpecies: string, newName: string, newAge: number, newDiet: string, newLocation: string, newNumCare: number,newSex: string,newLikes: string, newDislikes: string){
  var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet,newLocation,newNumCare,newSex,newLikes,newDislikes);
  this.newAnimalSender.emit(newAnimalToAdd)
  this.showNewAnimalForm = false;
}

 newAnimalButtonClicked(){
     this.showNewAnimalForm = true;
 }

}
