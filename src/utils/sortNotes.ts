import { Note } from 'dicoding-react-notes'

export const sortNotes = (a: Note, b: Note) =>
  new Date(a.createdAt) < new Date(b.createdAt) ? 1 : new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 0
