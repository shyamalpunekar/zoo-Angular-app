import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({

  selector: 'edit-animal',
  template: `
  <div class="well" *ngIf="childSelectedAnimal">
    <div >
      <h3 class="carn">Edit Animal</h3>

      <h3><input [(ngModel)]="childSelectedAnimal.name"></h3>
      <div>

      <label>Edit animal species</label>
      <input [(ngModel)]="childSelectedAnimal.animalSpecies" type="text">
      </div>

      <div>
      <label>Edit animal age</label>
      <input [(ngModel)]="childSelectedAnimal.age" type="text">
      </div>

      <div>
      <label>Edit animal location</label>
      <input [(ngModel)]="childSelectedAnimal.location" type="text">
      </div>

      <div>
      <label></label>
      <input [(ngModel)]="childSelectedAnimal.caretakers" type="number">
      <button (click)="editDoneButtonClicked()">Done</button>
      </div>

      <label>Select gender</label>
        <select [(ngModel)]="childSelectedAnimal.gender" (change)="onFilterAgeChange($event.target.value)">
           <option value="" selected disabled>Select Gender</option>
           <option value="female" >Female</option>
           <option value="male">Male</option>
        </select>
        </div>
        <div>
          <label>Edit Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes" type="text">
        </div>
        <div>
          <label>Edit Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes" type="text">
        </div>

         <a href="#"><button class="btn btn-primary" (click)="editDoneButtonClicked()">Done!</button></a>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() editDoneButtonClickedSender = new EventEmitter();


  editDoneButtonClicked() {
    this.editDoneButtonClickedSender.emit();
  }

}
