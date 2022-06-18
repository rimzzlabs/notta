import { Button, Input, Textarea } from '@/components/atoms'

import useNotes from '@/hooks/useNotes'
import { twclsx } from '@/utils'

import { useCallback, useEffect, useState } from 'react'

const NotesEditor = () => {
  const { addNote } = useNotes()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [maxLength, setMaxLength] = useState(50)
  const [isError, setIsError] = useState(false)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.value.length > 50 ? null : setTitle(e.target.value)

  const handleBodyChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value), [body])

  const clearInputValue = () => {
    setTitle('')
    setBody('')
  }

  const handleSubmit = () => {
    if (title.length === 0 || body.length === 0) {
      setIsError(true)
      return
    }

    setIsError(false)
    addNote({
      title,
      body,
      archived: false,
      id: new Date().toISOString(),
      createdAt: new Date().toISOString()
    })
    clearInputValue()
  }

  useEffect(() => {
    setMaxLength(50 - title.length)
  }, [title])

  return (
    <div className={twclsx('flex flex-col gap-4')}>
      <div className={twclsx('flex flex-col gap-2', 'mb-4')}>
        <div
          className={twclsx(
            'relative border transition-transform',
            'border-main-900 dark:border-main-100',
            'before:absolute before:inset-0 before:z-[-1] before:transition-transform',
            'before:bg-main-900 dark:before:bg-main-100',
            'before:translate-x-1 before:translate-y-1'
          )}
        >
          <Input
            onChange={handleTitleChange}
            value={title}
            className={twclsx('border-none w-full')}
            placeholder="Note's title"
          />
        </div>

        <div className={twclsx('flex items-center justify-between', 'text-sm')}>
          <span
            className={twclsx(
              maxLength === 0 && 'text-red-500 dark:text-red-400',
              maxLength > 0 && maxLength < 15 && 'text-yellow-500'
            )}
          >
            {maxLength === 0 ? 'Max character exceed!' : `Character left: ${maxLength}`}
          </span>
          {isError && title.length === 0 && (
            <span className={twclsx('text-red-500 dark:text-red-400')}>Please fill the title!</span>
          )}
        </div>
      </div>

      <div className={twclsx('flex flex-col gap-4')}>
        <div
          className={twclsx(
            'relative',
            'w-full h-40 border',
            'border-main-900 dark:border-main-100',
            'bg-main-50 dark:bg-main-900',
            'before:absolute before:z-[-1] before:inset-0 before:transition-transform',
            'before:bg-main-900 dark:before:bg-main-100',
            'before:translate-x-1.5 before:translate-y-1.5',
            'focus-within:before:translate-x-1 focus-within:before:translate-y-1'
          )}
        >
          <Textarea
            onChange={handleBodyChange}
            value={body}
            className={twclsx('h-full overflow-y-auto')}
            placeholder="What's the note about?"
          />
        </div>
        {isError && body.length === 0 && (
          <span className={twclsx('inline-block ml-auto text-sm', 'text-red-500 dark:text-red-400')}>
            Describe your notes on this field!
          </span>
        )}
      </div>

      <Button
        onClick={handleSubmit}
        className={twclsx(
          'max-w-max',
          'py-2 px-4',
          'bg-main-900 text-main-50',
          'dark:bg-primary-500 dark:border-primary-500 dark:text-white',
          'before:bg-primary-500 dark:before:bg-main-200'
        )}
      >
        Create
      </Button>
    </div>
  )
}

export default NotesEditor
