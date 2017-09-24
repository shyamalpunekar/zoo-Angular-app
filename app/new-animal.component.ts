import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

    <h1>Add New Animal</h1>
    <div class="well">

       <label>Enter Animal Species:</label>
       <input type="text" #newSpecies>

       <label>Enter Animal Name:</label>
       <input type="text" #newName>

       <label>Enter Animal Age:</label>
       <input type="number" #newAge>

       <label>Enter Animal Diet:</label>
       <input type="text" #newDiet>

       <label>Enter Animal Location:</label>
       <input type="text" #newLocation>

       <label>Enter Animal Gender:</label>
       <select class="newAnimalInput" #gender (change)="onFilterAgeChange($event.target.value)">
         <option value="select" selected disabled>Select Gender</option>
         <option value="female" >Female</option>
         <option value="male">Male</option>
      </select>

       <label>Enter Animal Likes:</label>
       <input type="text" #newLikes>

       <label>Enter Animal dislikes:</label>
       <input type="text" #newDislikes>

       <a href="#"><button class="btn btn-primary" (click)="submitForm(newImage.value, animalSpecies.value, name.value, age.value, diet.value, location.value, caretakers.value, gender.value, likes.value, dislikes.value); newImage.value =''; animalSpecies.value = ''; name.value = ''; age.value = ''; diet.value =''; location.value =''; caretakers.value = ''; gender.value = ''; likes.value = ''; dislikes.value = '';">Add Animal!</button></a>
    </div>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(img: string, animalSpecies: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, like: string, dislike: string){
  var newAnimalToAdd: Animal = new Animal(img, animalSpecies, name, age, diet, location, caretakers, gender, like, dislike);
  this.newAnimalSender.emit(newAnimalToAdd);
}

}
