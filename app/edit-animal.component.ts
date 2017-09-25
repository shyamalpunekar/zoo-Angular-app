import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({

  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3 class="animalForm">Edit Animal</h3>
      <input [(ngModel)]="childSelectedAnimal.species">
      <input [(ngModel)]="childSelectedAnimal.name">
      <input [(ngModel)]="childSelectedAnimal.age">
      <input [(ngModel)]="childSelectedAnimal.diet">
      <br>
      <button (click)="editDoneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() editDoneSender = new EventEmitter();


  editDoneButtonClicked() {
    this.editDoneSender.emit();
  }

}
