import React from 'react'
import { TodoTask } from './Todo.js'
import { useStateValue } from '../hooks/useStateValue.js'
	
export const TodoList = () => {
	const [{todoList}, dispatch]=useStateValue()
	return (
	    <div>
	        {todoList && todoList.map(task => <TodoTask key={task.id} task={task}/>)}
	        <button onClick ={() => dispatch({type: 'REMOVE_COMPLETED'})}>Remove Completed</button>
	    </div>
	    )
	}