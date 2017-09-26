import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({

  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>Edit Animal</h3>
      <label>Edit species:</label>
      <input [(ngModel)]="childSelectedAnimal.species"><br>
      <label>Edit name:</label>
      <input [(ngModel)]="childSelectedAnimal.name"><br>
      <label>Edit age:</label>
      <input [(ngModel)]="childSelectedAnimal.age"><br>
      <label>Edit diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet"><br>
      <label>Edit location:</label>
      <input [(ngModel)]="childSelectedAnimal.location"><br>
      <label>Edit number of caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.numCaretaker"><br>
      <label>Edit gender:</label>
      <input [(ngModel)]="childSelectedAnimal.gender"><br>
      <label>Edit animal's likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes"><br>
      <label>Edit animal's dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      <br>
      <button class="btn btn-primary" (click)="editDoneButtonClicked()">Done</button>
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
