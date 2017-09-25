import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="!showNewAnimalForm">
    <button (click)="newAnimalButtonClicked()">Add a New Animal</button><hr>
  </div>
  <div *ngIf="showNewAnimalForm" class="newAnimalForm">
    <h1>New Animal</h1>
    <div>
       <label>Enter Animal Species:</label>
       <input type="text" #newSpecies> <br>
       <label>Enter Animal Name:</label>
       <input type="text" #newName> <br>
       <label>Enter Animal Age:</label>
       <input type="number" #newAge> <br>
       <label>Enter Animal Diet:</label>
       <input type="text" #newDiet> <br>
       <label>Enter Animal location:</label>
       <input type="text" #newLocation> <br>
       <label>Enter Animal caretaker:</label>
       <input type="text" #newCaretaker> <br>
       <label>Enter Animal gender:</label>
       <input type="text" #newgender> <br>
       <label>Enter Animal Likes:</label>
       <input type="text" #newLikes> <br>
       <label>Enter Animal Dislikes:</label>
       <input type="text" #newDislikes> <br>
       <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newGender.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretaker.value=''; newgender.value=''; newLikes.value=''; newDislikes.value=''; ">Add New Animal</button>
       <br>
     </div>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  showNewAnimalForm : boolean;

  submitForm (newSpecies: string, newName: string, newAge: number, newDiet: string, newLocation: string, newCaretaker: number,newGender: string,newLikes: string, newDislikes: string){
    var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet,newLocation,newCaretaker,newGender,newLikes,newDislikes);
    this.newAnimalSender.emit(newAnimalToAdd)
    this.showNewAnimalForm = false;
  }

  newAnimalButtonClicked(){
      this.showNewAnimalForm = true;
  }

}
