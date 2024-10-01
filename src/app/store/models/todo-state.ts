export interface ListItem {
	title: string;
	isCompleted: boolean;
	id: number
}

export interface ApplicationState {
	isLoading: boolean,
	hasError: false
	listItems: ListItem[]
}

export const initialState: ApplicationState = {
		isLoading: false,
		hasError: false,
		listItems: []

}
