import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="!displayNewAnimalForm">

    <h4 id="addNewTextAnimal">Please enter the details to add new Animal!</h4>
    <button class="btn btn-primary" id="addnewAnimal" (click)="newAnimalButtonClicked()">Add a New Animal</button><br>
  </div>


  <div *ngIf="displayNewAnimalForm" class="newAnimalForm">

    <div class= "form-group">
    <h3>New Animal</h3>
       <div class="addNewAnimalMember">
       <label>Enter Animal Species:</label>
       <input #newSpecies type = "text" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Animal Name:</label>
       <input #newName type = "text" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Animal Age:</label>
       <input #newAge type = "number" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Animal Diet:</label>
       <input #newDiet type = "text" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Animal Location:</label>
       <input #newLocation type = "text" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Number of Caretakers for this Animal:</label>
       <input #newCaretaker type = "number" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Animal Gender:</label>
       <input #newGender type = "text" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Animal Likes:</label>
       <input #newLikes type = "text" class="form-control">
       </div>
       <div class="addNewAnimalMember">
       <label>Enter Animal Dislikes:</label>
       <input #newDislikes type = "text" class="form-control">
       </div><br>

       <button class="btn btn-primary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newGender.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretaker.value=''; newGender.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
       <br>
     </div>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  displayNewAnimalForm : boolean;

  submitForm (newSpecies: string, newName: string, newAge: number, newDiet: string, newLocation: string, newCaretaker: number, newGender: string, newLikes: string, newDislikes: string){
    var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet, newLocation, newCaretaker, newGender, newLikes, newDislikes);
    this.newAnimalSender.emit(newAnimalToAdd)
    this.displayNewAnimalForm = false;
  }

  newAnimalButtonClicked(){
      this.displayNewAnimalForm = true;
  }

}
