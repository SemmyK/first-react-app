import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function CreateArea(props) {
	const [singleNote, setSingleNote] = useState({
		title: '',
		content: '',
	})
	const [btnActive, setBtnActive] = useState(true)

	function handleChange(event) {
		event.preventDefault()
		const { name, value } = event.target
		setSingleNote(prevNote => ({ ...prevNote, [name]: value }))
		if (singleNote.title !== '' && singleNote.content !== '') {
			setBtnActive(false)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.handleAdding(singleNote)
		setSingleNote({
			title: '',
			content: '',
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="create-note">
				<input
					name="title"
					placeholder="Title"
					value={singleNote.title}
					onChange={handleChange}
				/>
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					onChange={handleChange}
					value={singleNote.content}
				/>
				<button type="submit" disabled={btnActive}>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</form>
		</div>
	)
}

export default CreateArea
