import { Button, Input, Textarea } from '@/components/atoms'

import { twclsx } from '@/utils'

const NotesEditor = () => {
  return (
    <div className={twclsx('flex flex-col gap-4')}>
      <div
        className={twclsx(
          'relative border transition-transform mb-4',
          'border-main-900 dark:border-main-100',
          'before:absolute before:inset-0 before:z-[-1] before:transition-transform',
          'before:bg-main-900 dark:before:bg-main-100',
          'before:translate-x-1 before:translate-y-1'
        )}
      >
        <Input className={twclsx('border-none w-full')} placeholder='Judul catatan' />
      </div>

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
        <Textarea className={twclsx('h-full overflow-y-auto')} placeholder='Apa isi catatan yang akan anda tulis?' />
      </div>

      <Button
        className={twclsx(
          'max-w-max',
          'py-2 px-4',
          'bg-main-900 text-main-50',
          'dark:bg-primary-500 dark:border-primary-500 dark:text-white',
          'before:bg-primary-500 dark:before:bg-main-200'
        )}
      >
        Tambah
      </Button>
    </div>
  )
}

export default NotesEditor
