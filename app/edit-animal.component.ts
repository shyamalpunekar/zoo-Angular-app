import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({

  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3 class="formh3">Edit Animal</h3>
      <input [(ngModel)]="childSelectedAnimal.name">
      <input [(ngModel)]="childSelectedAnimal.brand">
      <input [(ngModel)]="childSelectedAnimal.pintPrice">
      <input [(ngModel)]="childSelectedAnimal.ABV">
      <br>
      <button (click)="editDoneButtonClicked()">Done</button>
    </div>
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
