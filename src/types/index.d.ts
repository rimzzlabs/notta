declare module 'dicoding-react-notes' {
  export type Note = {
    id: number | string
    title: string
    body: string
    archived: boolean
    createdAt: string
  }
}
