import { ActionsSubject, ReducerManager, ReducerManagerDispatcher } from "@ngrx/store";
import { MockState, MockStore } from "@ngrx/store/testing";
import { ApplicationState, initialState } from "./models/todo-state";

const actionSubject$: ActionsSubject = new ActionsSubject();
const reducerManager$: ReducerManager = new ReducerManager({} as ReducerManagerDispatcher, null, {}, () => () => {});
const mockState$: MockState<ApplicationState> = new MockState();

// Creating this so we can use it when we need to pass the store in to the constructor of a service but we want to run our tests outside of the TestBed.
export const MOCK_STORE$: MockStore<ApplicationState> = new MockStore(
  mockState$,
  actionSubject$,
  reducerManager$,
  initialState
);