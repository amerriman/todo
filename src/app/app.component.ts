import { Component,  } from '@angular/core';
import { ListItemsComponent } from './list-items/list-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, ListItemsComponent, AddItemComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
