import { NoteCard } from '@/components/mollecules'

import useNotes from '@/hooks/useNotes'
import { twclsx } from '@/utils'
import { sortNotes } from '@/utils'

import { Note } from 'dicoding-react-notes'

type ArchivedNoteListProps = {
  notes: Note[]
  query: string
}

const ArchivedNoteList: React.FunctionComponent<ArchivedNoteListProps> = ({ query, notes = [] }) => {
  const { filteredNotes } = useNotes()

  return (
    <section className={twclsx('py-4 md:py-8')}>
      <h3 className={twclsx('mb-4')}>Archived Notes</h3>

      {query.length === 0 ? (
        <>
          {notes.filter((n) => n.archived).length > 0 ? (
            <div className={twclsx('grid grid-cols-1 md:grid-cols-2', 'flex-auto gap-4')}>
              {notes
                .filter((n) => n.archived)
                .sort(sortNotes)
                .map((n) => (
                  <NoteCard key={n.id} {...n} />
                ))}
            </div>
          ) : (
            <p className={twclsx('text-center')}>
              It&apos;s appears that nothing here to show, might archive some note!
            </p>
          )}
        </>
      ) : null}

      {query.length > 0 ? (
        <>
          {filteredNotes.filter((n) => n.archived).length > 0 ? (
            <div className={twclsx('grid grid-cols-1 md:grid-cols-2', 'flex-auto gap-4')}>
              {filteredNotes
                .filter((n) => n.archived)
                .sort(sortNotes)
                .map((n) => (
                  <NoteCard key={n.id} {...n} />
                ))}
            </div>
          ) : (
            <p className={twclsx('text-center')}>Based on your search, nothing to show on archived notes.</p>
          )}
        </>
      ) : null}
    </section>
  )
}

export default ArchivedNoteList
