import React, { useState } from 'react'
import { useStateValue } from '../hooks/useStateValue.js'
	
export const Form = () => {
    const [input, setInput] = useState('');
	const [state, dispatch] = useStateValue()
	
	    const addTask = (event) => {
	        event.preventDefault();
	        dispatch({type: 'ADD_TODO', payload: input})
	        setInput('')
	    }
	
	    return (
	        <div>
	            <form onSubmit={(event) => addTask(event)}>
	                <label>To Do Task:</label>
	                <input 
	                    type='text'
	                    value={input}
	                    onChange={(event) => setInput(event.target.value)}
	                />
	                <input
	                    type="submit"
	                    onSubmit={(event) => addTask(event)}
	                />
	            </form>
	        </div>
	    )
	}