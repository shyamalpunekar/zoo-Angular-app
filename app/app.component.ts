import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1> Animal Tracker</h1>
    <h3> {{currentZoo}}</h3>
    <h4> {{month}}/{{day}}/{{year}}</h4>
    <h4> Add New Animal</h4>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    <h3> Animal List</h3>
    <animal-list [childAnimalList] = "masterAnimalList" (clickSender)="editAnimal($event)"> </animal-list>

    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editDoneSender)="doneEdit()"> </edit-animal>
  </div>
  `
})
//add jpeg to resource/images
export class AppComponent{
  currentZoo: string = 'Oregon Zoo';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal("./resources/images/tiger.jpg","Tiger", "Tim",5,"carnivorous","caves",5,"male","yawning", "walking"),
    new Animal("./resources/images/giraffe.jpg","giraffe", "Gif",1,"herbivorous","Trees",2,"female","hanging around", "sleep"),
    new Animal("./resources/images/polo.jpg", "Polo Bear", "Polo",2,"carnivorous","water",8,"female","swimming", "yawning"),
    new Animal("./resources/images/monkey.jpg", "monkey", "Monk",1,"herbivorous","Trees",6,"female","hanging around", "sleep")
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal: Animal){
    this.selectedAnimal = clickedAnimal;
  }
  doneEdit(){
    this.selectedAnimal = null;
  }
  addAnimal(newAnimal: Animal){
    this.masterAnimalList.push(newAnimal);
  }

}
