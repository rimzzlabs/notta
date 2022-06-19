import * as atoms from '@/app/store'

import { Note } from 'dicoding-react-notes'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'

const useNotes = () => {
  const [notes, setNotes] = useAtom(atoms.notes)
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([])
  const [query, setQuery] = useAtom(atoms.query)

  // accept note to be added to note state
  const addNote = (note: Note) => setNotes((prevState) => [...prevState, note])

  const archiveNote = (note: Note) =>
    setNotes((prevState) => prevState.map((n) => (n.id === note.id ? { ...n, archived: !n.archived } : n)))

  // remove note from the
  const removeNote = (id: string | number) => setNotes((prevState) => prevState.filter((note) => note.id !== id))

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  useEffect(() => {
    if (query.length > 0) {
      setFilteredNotes(notes.filter((n) => n.title.toLowerCase().includes(query.toLowerCase())))
    }
  }, [query])

  return {
    query,
    handleQuery,
    notes,
    filteredNotes,
    addNote,
    removeNote,
    archiveNote
  }
}

export default useNotes
