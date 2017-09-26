import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `

  <div class="well">
    <h2>Welcome to Wildlife Safari</h2>
    <h3>About the Oregon Zoo</h3>
    <h4>The 64-acre Oregon Zoo is located in Portland, a city and surrounding metropolitan area of 2.26 million people. Attendance in 2011 exceeded 1.6 million.</h4>

    <h3>Sustainability at the zoo</h3>

    <h4>With ongoing renovations to existing facilities and with every new exhibit or system, the zoo aims to be a model of sustainable conservation of natural resources.</h4>

    <h3> Would you like to Add New Animal? Please, scroll Down!</h3>

    <img src="/resources/images/background.jpg" alt="Picture of an zoo"/>
    <hr>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>


     <new-animal (newAnimalSender)="addAnimal($event)">Add New Animal</new-animal>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (editDoneButtonClickedSender)="doneEdit()"> </edit-animal>
  </div>
  `
})

export class AppComponent{

  masterAnimalList: Animal[] = [
    new Animal('./resources/images/tiger.jpg','Siberian Tiger', 'Amur', 2, 'The gene for white coating is quite common among Bengal tigers, but the natural birth of a white Bengal tiger is still a very rare occasion in the wild, where white tigers are not bred selectively. The white tiger is not considered a tiger subspecies, but rather a hybrid mutant variant of the existing tiger subspecies.' ,'meat', 'Bengal', 3, 'Female', 'cold weather', 'entertainment'),
    new Animal('./resources/images/polo.jpg','Polo bear', 'Polo', 8, 'Polar bears are large, white bears that like cold climates, fatty meals and long days of hunting. No matter how adorable polar bears look, these animals are not cuddly. In fact, polar bears are ferocious hunters, and they are the biggest carnivores among land animals.' , 'fatty meals', 'Arctic Ocean', 5, 'Male', 'cold climates', 'heat'),
    new Animal('./resources/images/giraffe.jpg',' giraffe', 'Gif', 5, ' The tallest mammals in the world. Over short distances, giraffes can run at speeds up to 35 mph. Giraffes only need to drink water once every couple of days. They get most of their water from their plant-based diet' ,'herbivorous', 'plants', 2, 'Female', '', 'walking'),
    new Animal('./resources/images/monkey.jpg','monkey', 'Monk', 1, ' Monkeys are one of the funniest animals in nature. They are full of curiosity and adventure, mischief and intelligence. A monkey would make a great science project because there are many different species that you could explore, and also, you could study how monkeys evolved into human beings.' ,'herbivorous', 'plants and fruits', 1, 'Female', 'Physically and Socially Fitting in Dinner parties Meditating Training Respect', 'Being told what to do')
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  doneEdit(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
