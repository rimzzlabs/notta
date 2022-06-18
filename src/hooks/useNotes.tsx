import { Note } from 'dicoding-react-notes'
import { useState } from 'react'

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [filteredNote, setFilteredNote] = useState<Note[]>([])
  const [archivedNote, setArchivedNote] = useState<Note[]>([])

  // accept note to be added to note state
  const addNote = (note: Note) => setNotes((prevState) => [...prevState, note])

  // remove note from the
  const removeNote = (id: string | number) => {
    const filterCurrentNote = (note: Note[]) => note.filter((n) => n.id !== id)

    setFilteredNote(filterCurrentNote)
    setArchivedNote(filterCurrentNote)
    setNotes(filterCurrentNote)
  }

  const filterNote = (query: string) =>
    setFilteredNote(notes.filter((n) => n.title.toLowerCase().includes(query.toLowerCase())))

  const archiveNote = (note: Note) => {
    setArchivedNote((prevState) => [...prevState, note])
    setNotes((prevState) => prevState.filter((n) => n.title !== note.title))
  }

  return {
    notes,
    filteredNote,
    archivedNote,
    addNote,
    filterNote,
    archiveNote,
    removeNote
  }
}

export default useNotes
