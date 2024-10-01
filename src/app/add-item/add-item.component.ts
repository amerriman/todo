import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApplicationState, ListItem } from '../store/models/todo-state';
import { addListItem } from '../store/actions/todo.actions';

@Component({
  selector: 'add-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  idHelper: number = 0
  constructor(
    private store$: Store<ApplicationState>
	){}

  addItemForm = new FormGroup({
    newItem: new FormControl('')
  })

  addItem() {
    // would add validators here
      const newItem = {
        title: this.addItemForm.value.newItem || '',
        isCompleted: false,
        id: ++this.idHelper
      };
      // With more time, this would be handled via a facade
      this.store$.dispatch(addListItem({item: newItem}))
      this.addItemForm.reset();
  }
}
