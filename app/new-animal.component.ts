import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="!showNewAnimalForm">
    <h4>Please enter the details to add new Animal!</h4>

    <button class="btn btn-primary" id="addnewAnimal" (click)="newAnimalButtonClicked()">Add a New Animal</button><br>
  </div>
  <hr>

  <div *ngIf="showNewAnimalForm" class="newAnimalForm">
    <h3>New Animal</h3>
    <div>
       <label>Enter Animal Species:</label>
       <input #newSpecies>
       <br>
       <label>Enter Animal Name:</label>
       <input #newName>
       <br>
       <label>Enter Animal Age:</label>
       <input #newAge>
       <br>
       <label>Enter Animal Diet:</label>
       <input #newDiet>
       <label>Enter Animal Location:</label>
       <input #newLocation>
       <br>
       <label>Enter Number of Caretakers for this Animal:</label>
       <input #newCaretaker>
       <br>
       <label>Enter Animal Gender:</label>
       <input #newGender>
       <br>
       <label>Enter Animal Likes:</label>
       <input #newLikes>
       <label>Enter Animal Dislikes:</label>
       <input #newDislikes>
       <br>
       <button class="btn btn-primary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newGender.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretaker.value=''; newGender.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
       <br>
     </div>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  showNewAnimalForm : boolean;

  submitForm (newSpecies: string, newName: string, newAge: number, newDiet: string, newLocation: string, newCaretaker: number, newGender: string, newLikes: string, newDislikes: string){
    var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet, newLocation, newCaretaker, newGender, newLikes, newDislikes);
    this.newAnimalSender.emit(newAnimalToAdd)
    this.showNewAnimalForm = false;
  }

  newAnimalButtonClicked(){
      this.showNewAnimalForm = true;
  }

}
