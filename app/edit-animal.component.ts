import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({

  selector: 'edit-animal',
  template: `
  <div class="form-group">
    <div *ngIf="childSelectedAnimal">
      <h3>Edit Animal</h3>
      <label>Edit species:</label>
      <input [(ngModel)]="childSelectedAnimal.species" class="form-control" type="text"><br>
      <label>Edit name:</label>
      <input [(ngModel)]="childSelectedAnimal.name" class="form-control" type="text"><br>
      <label>Edit age:</label>
      <input [(ngModel)]="childSelectedAnimal.age" class="form-control" type="number"><br>
      <label>Edit diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet" class="form-control" type="text"><br>
      <label>Edit location:</label>
      <input [(ngModel)]="childSelectedAnimal.location" class="form-control" type="text"><br>
      <label>Edit number of caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.numCaretaker" class="form-control" type="number"><br>
      <label>Edit gender:</label>
      <input [(ngModel)]="childSelectedAnimal.gender" class="form-control" type="text"><br>
      <label>Edit animal's likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes" class="form-control" type="text"><br>
      <label>Edit animal's dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes" class="form-control" type="text">
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
