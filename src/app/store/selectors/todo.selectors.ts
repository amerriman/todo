import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ApplicationState, ListItem } from "../models/todo-state";

// These selectors should ultimately have unit tests
export const selectTodoState = createFeatureSelector<ApplicationState>('todos')

export const selectTodoListItems = createSelector(
	selectTodoState,
	state => state.listItems
)

