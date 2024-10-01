import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState, ListItem } from '../store/models/todo-state';
import { selectTodoListItems } from '../store/selectors/todo.selectors';
import { CommonModule } from '@angular/common';
import { updateListItem, deleteListItem } from '../store/actions/todo.actions';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  constructor(
    private store$: Store<ApplicationState>
	){}

  listItems$!: Observable<any>;

  // With more time, all interaction with the store would be handled via a facade.
  ngOnInit(): void {
    this.listItems$ = this.store$.select(selectTodoListItems).pipe()
  }

  toggleComplete(item: ListItem): void {
    const updatedItem = {
      ...item,
      isCompleted: !item.isCompleted
    }
    this.store$.dispatch(updateListItem({item: updatedItem}))
  }

    deleteTask(id: any) {
      this.store$.dispatch(deleteListItem({id: id}))
    }
}