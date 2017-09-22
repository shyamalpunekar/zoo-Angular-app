import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent} from './edit-animal.component';
import { newAnimalComponent} from './new-animal.component';
import { AgeFilterPipe} from './age-filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent , EditAnimalComponent, newAnimalComponent, AgeFilterPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}