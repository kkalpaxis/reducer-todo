import React from 'react'
import { useStateValue } from '../hooks/useStateValue.js'
	
export const TodoTask = (props) => {
    const [state, dispatch] = useStateValue()
	return (
	    <div>
            <h3 onClick={() => dispatch({type:'COMPLETE_TASK', payload: props.task.id})}>
            {props.task.todo}</h3>
	    </div>
	    )
	}