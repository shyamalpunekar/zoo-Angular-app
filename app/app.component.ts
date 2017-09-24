import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1> Animal Tracker</h1>
    <h3> {{currentZoo}}</h3>
    <h4> {{month}}/{{day}}/{{year}}</h4>
    <h4 class="carn">To add a new animal<a href="#addNewAnimal"> Click Here</a></h4>
    <div class="new-animal">
    <new-animal (newAnimalSender)="addNewAnimal($event)"></new-animal>
    </div>
    <div class="animal-list">
    <animal-list [childAnimalList] = "masterAnimalList" (clickSender)="editAnimal($event)"> </animal-list>
    </div>
    <div class="edit-animal">
    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editButtonClickedSender)="finishedEditing()"> </edit-animal>
    </div>
  </div>
  `
})

export class AppComponent{
  currentZoo: string = 'Oregon Zoo';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('./resources/images/polar.jpg', 'Polar Bear', 'Nora', 4, 'Carnivore', 'Polar Cove', 5, 'Female', 'Having Ice Caps to rest on', 'Swimming Long Distances'),
    new Animal('./resources/images/koala.jpg', 'Koala', 'Sleepy', 2, 'Herbivore', 'Near the bears', 2, 'Male', 'Sleeping in trees and not being bothered', 'Being bothered'),
    new Animal('./resources/images/kangaroo.jpg', 'Kangaroo', 'Joy', 3, 'Herbivore', 'Near the bears', 4, 'Female', 'Eating cones full of seeds and boxing', 'Being challenged by another kangaroo'),
    new Animal('./resources/images/badger.jpg', 'Honey Badger', 'Tom', 15, 'Carnivore', 'In the weasel section', 1, 'Male', 'Finding beehives and eating all the honey', 'Having other honey badgers enter their cave')
  ];


  editButtonClicked(clickedAnimal: Animal){
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing(){
    this.selectedAnimal = null;
  }
  addNewAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
