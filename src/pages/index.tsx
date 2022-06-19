import { Searchbar } from '@/components/mollecules'
import { Disclaimer, NotesEditor } from '@/components/organism'

import useNotes from '@/hooks/useNotes'
import ArchivedNoteList from '@/layouts/ArchivedNoteList'
import NoteList from '@/layouts/NoteList'
import { twclsx } from '@/utils'

const IndexPage: React.FunctionComponent = () => {
  const { notes, query } = useNotes()

  return (
    <>
      <Disclaimer />
      <Searchbar />
      <section className={twclsx('py-4 md:py-8')}>
        <h2 className={twclsx('my-4')}>Create a new Note</h2>
        <NotesEditor />
      </section>

      <NoteList notes={notes} query={query} />

      <ArchivedNoteList notes={notes} query={query} />
    </>
  )
}

export default IndexPage
