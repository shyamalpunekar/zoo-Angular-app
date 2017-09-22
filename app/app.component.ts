import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1> Animal Tracker</h1>
    <h3> {{currentZoo}}</h3>
    <h4> {{month}}/{{day}}/{{year}}</h4>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    <animal-list [childAnimalList] = "masterAnimalList" (clickSender)="editAnimal($event)"> </animal-list>
    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editDoneSender)="doneEdit()"> </edit-animal>
  </div>
  `
})

export class AppComponent{
  currentZoo: string = 'Oregon Zoo';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal("elephant", "Sammy",5,"herbivore","Elephant House",5,"male","red bouncy ball", "other male elephants"),
    new Animal("orangatang", "Flower",1,"herbivore","Monkey Pavilion",5,"female","rope swinging", "music"),
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
