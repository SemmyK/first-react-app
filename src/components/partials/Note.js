import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Note(props) {
	return (
		<article className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={() => props.deleteNote(props.id)}>
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</article>
	)
}

export default Note
