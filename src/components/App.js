import React, { useState } from 'react'
//components
import Header from './partials/Header'
import Footer from './partials/Footer'
import Note from './partials/Note'
import CreateArea from './partials/CreateArea'
import { v4 as uuidv4 } from 'uuid'

function App() {
	const [noteList, setNoteList] = useState([])

	function addNote(noteObj) {
		setNoteList(prevList => [...prevList, { ...noteObj, key: uuidv4() }])
	}

	function removeNote(noteID) {
		setNoteList(prevList => {
			const newList = prevList.filter(listItem => listItem.key !== noteID)
			return newList
		})
	}

	return (
		<div className="App">
			<Header />

			<main>
				<CreateArea handleAdding={addNote} />
				<article>
					{noteList &&
						noteList.map(note => (
							<Note
								key={note.key}
								title={note.title}
								id={note.key}
								content={note.content}
								deleteNote={removeNote}
							/>
						))}
				</article>
			</main>

			<Footer />
		</div>
	)
}

export default App
