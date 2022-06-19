import { initialNotesData } from '@/utils'

import { Note } from 'dicoding-react-notes'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type Theme = 'light' | 'dark'

type Disclaimer = {
  isVisible: boolean
  message: string
}

export const theme = atomWithStorage<Theme>('theme', 'light')

export const notes = atomWithStorage<Note[]>('notes', initialNotesData)

export const filteredNotes = atom<Note[]>([])

export const query = atom('')

export const disclaimerApp = atom<Disclaimer>({
  isVisible: false,
  message: "Your notes only saved on your local storage, so don't worry about privacy!"
})
