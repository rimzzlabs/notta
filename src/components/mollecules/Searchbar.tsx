import { Input } from '@/components/atoms'

import useNotes from '@/hooks/useNotes'
import { isPseudoElement, twclsx } from '@/utils'

import { useCallback, useEffect, useState } from 'react'
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi'

const Searchbar = () => {
  const [query, setQuery] = useState('')
  const { filterNote } = useNotes()
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value), [query])

  useEffect(() => {
    const timer = setTimeout(() => filterNote(query), 300)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div
      className={twclsx(
        'relative',
        'border border-main-900 dark:border-main-100',
        'focus-within:before:translate-x-0.5 focus-within:before:translate-y-0.5',
        isPseudoElement(true)
      )}
    >
      <Input
        placeholder='cari catatan...'
        className={twclsx('border-none w-full')}
        value={query}
        onChange={handleChange}
      />
      <div className={twclsx('absolute right-0', 'inline-flex items-center justify-center', 'w-10 h-full text-lg')}>
        <SearchIcon />
      </div>
    </div>
  )
}

export default Searchbar
