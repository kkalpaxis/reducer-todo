import { TodoReducer} from './TodoReducer'

export const Reducer = ({todoList}, action) => ({
	todoList: TodoReducer(todoList, action)
}) 