import { Button } from '@/components/atoms'

import useNotes from '@/hooks/useNotes'
import { fmt, twclsx } from '@/utils'

import { Note } from 'dicoding-react-notes'
import { useCallback } from 'react'

const NoteCard: React.FunctionComponent<Note> = (props) => {
  const { removeNote, archiveNote } = useNotes()

  const handleRemove = useCallback(() => removeNote(props.id), [props.id])
  const handleArchive = useCallback(() => archiveNote(props), [props.id])

  return (
    <section
      key={props.id}
      className={twclsx(
        'relative',
        'flex flex-col',
        'w-full h-full',
        'p-4 md:p-6 border',
        'border-main-900 dark:border-main-200',
        'bg-main-50 dark:bg-main-900',
        'before:absolute before:inset-0 before:transition-transform before:z-[-1]',
        'before:bg-main-900 dark:before:bg-main-200',
        'before:translate-y-1.5 before:translate-x-1.5',
        'hover:before:translate-x-1 hover:before:translate-y-1'
      )}
    >
      <h4>{props.title}</h4>
      <span className={twclsx('mt-2 mb-4 text-sm text-primary-800 dark:text-primary-100')}>{fmt(props.createdAt)}</span>
      <p className={twclsx('mb-4')}>{props.body}</p>
      <div className={twclsx('flex items-center gap-4', 'mt-auto')}>
        <Button
          onClick={handleRemove}
          className={twclsx('py-1 px-2', 'bg-red-500 text-white dark:bg-red-600 dark:text-white')}
        >
          Delete
        </Button>
        <Button
          onClick={handleArchive}
          className={twclsx(
            'py-1 px-2',
            props.archived
              ? 'bg-primary-500 dark:bg-primary-600 text-white dark:text-white'
              : 'bg-yellow-500 dark:bg-amber-500 text-black dark:text-white'
          )}
        >
          {props.archived ? 'Unarchive' : 'Archive'}
        </Button>
      </div>
    </section>
  )
}

export default NoteCard
