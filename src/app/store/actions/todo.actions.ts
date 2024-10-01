import { createAction, props } from '@ngrx/store';
import { ListItem } from '../models/todo-state';

export const addListItem = createAction('Add List Item', props<{ item: ListItem }>());

export const deleteListItem = createAction('Delete List Item', props<{ id: number }>());

export const updateListItem = createAction('Update List Item', props<{ item: ListItem }>());