import * as atoms from '@/app/store'

import { Note } from 'dicoding-react-notes'
import { useAtom } from 'jotai'

const useNotes = () => {
  const [notes, setNotes] = useAtom(atoms.notes)
  const [filteredNote, setFilteredNote] = useAtom(atoms.filteredNotes)

  // accept note to be added to note state
  const addNote = (note: Note) => setNotes((prevState) => [...prevState, note])

  // remove note from the
  const removeNote = (id: string | number) => setNotes((prevState) => prevState.filter((note) => note.id !== id))

  const filterNote = (query: string) =>
    setFilteredNote(notes.filter((n) => n.title.toLowerCase().includes(query.toLowerCase())))

  return {
    notes,
    filteredNote,
    filterNote,
    addNote,
    removeNote
  }
}

export default useNotes
