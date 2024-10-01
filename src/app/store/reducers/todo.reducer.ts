import { Action, createReducer, on } from '@ngrx/store';
import { initialState, ApplicationState, ListItem } from '../models/todo-state';
import * as listActions from '../actions/todo.actions';

// With more time - all of the manipulation of the data should be happening in effects - along with any API calls
// Additionally - these need unit tests
export const listItemsReducer = createReducer(
	initialState,
	on(listActions.addListItem, (state, {item}) => ({
		...state,
		listItems: [...state.listItems, item]
	})),
	on(listActions.updateListItem, (state, {item}) => ({
		...state,
		listItems: [...state.listItems.filter(listItem => listItem.id != item.id), item]
	})),
	on(listActions.deleteListItem, (state, {id}) => ({
		...state,
		listItems: state.listItems.filter(item => item.id != id)
	}))

);
