import { Note } from 'dicoding-react-notes'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type Theme = 'light' | 'dark'

export const theme = atomWithStorage<Theme>('theme', 'light')

export const notes = atomWithStorage<Note[]>('notes', [])

export const filteredNotes = atom<Note[]>([])
