import { NoteCard } from '@/components/mollecules'

import useNotes from '@/hooks/useNotes'
import { twclsx } from '@/utils'
import { sortNotes } from '@/utils/sortNotes'

import { Note } from 'dicoding-react-notes'

type NoteListProps = {
  notes: Note[]
  query: string
}

const NoteList: React.FunctionComponent<NoteListProps> = ({ notes, query }) => {
  const { filteredNotes } = useNotes()

  return (
    <section className={twclsx('py-4 md:py-8')}>
      {query.length === 0 ? (
        <>
          <h3 className={twclsx('mb-4')}>Notes</h3>
          {notes.filter((n) => !n.archived).length > 0 ? (
            <div className={twclsx('grid grid-cols-1 md:grid-cols-2', 'flex-auto gap-4')}>
              {notes
                .filter((n) => !n.archived)
                .sort(sortNotes)
                .map((n) => (
                  <NoteCard key={n.id} {...n} />
                ))}
            </div>
          ) : (
            <p className={twclsx('text-center')}>It&apos;s appears that nothing here to show, add some note!</p>
          )}
        </>
      ) : null}

      {query.length > 0 ? (
        <>
          <h3 className={twclsx('mb-4')}>Searched Notes</h3>

          {filteredNotes.filter((n) => !n.archived).length > 0 ? (
            <div className={twclsx('grid grid-cols-1 md:grid-cols-2', 'flex-auto gap-4')}>
              {filteredNotes
                .filter((n) => !n.archived)
                .sort(sortNotes)
                .map((n) => (
                  <NoteCard key={n.id} {...n} />
                ))}
            </div>
          ) : (
            <p className={twclsx('text-center')}>Based on your search, nothing to show here.</p>
          )}
        </>
      ) : null}
    </section>
  )
}

export default NoteList
