import { MOCK_STORE$ } from "../store/mock-store";
import { AddItemComponent } from "./add-item.component";

describe('Add Item Component', () => {
  let component: AddItemComponent;

	beforeAll(() => {
		component = new AddItemComponent(MOCK_STORE$)
	})

	it('should dispatch addListItem on addItem', () => {
		const spy = spyOn(MOCK_STORE$, 'dispatch');
		component.addItem();
		expect(spy).toHaveBeenCalled();
	})

})