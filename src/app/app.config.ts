import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { listItemsReducer } from './store/reducers/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({todos:listItemsReducer}),
    // provideStore(),
    // provideState({name: 'todos', reducer: listItemsReducer}),
    provideStoreDevtools(
    )
  ]
};
