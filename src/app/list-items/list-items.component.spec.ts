import { deleteListItem, updateListItem } from "../store/actions/todo.actions";
import { MOCK_STORE$ } from "../store/mock-store";
import { ListItem } from "../store/models/todo-state";
import { ListItemsComponent } from "./list-items.component";

describe('List Item Component', () => {
  let component: ListItemsComponent;

	beforeAll(() => {
		component = new ListItemsComponent(MOCK_STORE$)
	})

	it('should dispatch updateListItem on toggleComplete', () => {
		const spy = spyOn(MOCK_STORE$, 'dispatch');
		const mockItem: ListItem = {
			title: 'Test Title',
			isCompleted: false,
			id: 1,
		}

		const expectedMockItem: ListItem = {
			title: 'Test Title',
			isCompleted: true,
			id: 1,
		}
		component.toggleComplete(mockItem);
		expect(spy).toHaveBeenCalledWith(updateListItem({item: expectedMockItem}));
	})

	it('should dispatch deleteListItem on deleteTask', () => {
		const spy = spyOn(MOCK_STORE$, 'dispatch');
		component.deleteTask(1);
		expect(spy).toHaveBeenCalledWith(deleteListItem({id: 1}));
	})

})