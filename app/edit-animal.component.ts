import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({

  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3 class="formh3">Edit Animal</h3>
      <input [(ngModel)]="childSelectedKeg.name">
      <input [(ngModel)]="childSelectedKeg.brand">
      <input [(ngModel)]="childSelectedKeg.pintPrice">
      <input [(ngModel)]="childSelectedKeg.ABV">
      <br>
      <button (click)="editDoneButtonClicked()">Done</button>
    </div>
  </div>

  `
})

export class EditAnimalComponent{
  @Input() childSelectedKeg: Animal;
  @Output() editDoneButtonClickedSender = new EventEmitter();


  editDoneButtonClicked() {
    this.editDoneButtonClickedSender.emit();
  }

}
