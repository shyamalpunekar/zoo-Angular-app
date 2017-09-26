import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `


    <div id="newAnimal" class="jumbotron">
      <h3>Add New Animal</h3>
      <label>Add Image Link</label>
      <input class="newAnimalInput" #newImage>
       <label>Enter Animal Species:</label>
       <input type="text" #animalSpecies> <br>
       <label>Enter Animal Name:</label>
       <input type="text" #name> <br>
       <label>Enter Animal Age:</label>
       <input type="number" #age> <br>
       <label>Enter Animal Diet:</label>
       <input type="text" #diet> <br>
       <label>Enter Animal location:</label>
       <input type="text" #location> <br>
       <label>Enter Animal caretaker:</label>
       <input type="number" #caretakers> <br>

       <div class="animalGender">
       <label>Select Animals gender</label>
         <select class="newAnimalInput" #gender (change)="onChange($event.target.value)">
            <option value="allAnimals" selected disabled>Select Gender</option>
            <option value="female" >Female</option>
            <option value="male">Male</option>
         </select>
        </div>
       <label>Enter Animal Likes:</label>
       <input type="text" #newLikes> <br>
       <label>Enter Animal Dislikes:</label>
       <input type="text" #newDislikes> <br>
       <a href="#"><button class="btn btn-primary" (click)="submitForm(newImage.value, animalSpecies.value, name.value, age.value, diet.value, location.value, caretakers.value, gender.value, like.value, dislike.value); newImage.value =''; animalSpecies.value = ''; name.value = ''; age.value = ''; diet.value =''; location.value =''; caretakers.value = ''; gender.value = ''; like.value = ''; dislike.value = '';">Add New Animal!</button></a>
       <br>
     </div>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  showNewAnimalForm : boolean;

  submitForm(img: string, animalSpecies: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, like: string, dislike: string){
  var newAnimalToAdd: Animal = new Animal(img, animalSpecies, name, age, diet, location, caretakers, gender, like, dislike);
  this.newAnimalSender.emit(newAnimalToAdd);
}

  newAnimalButtonClicked(){
      this.showNewAnimalForm = true;
  }

}
