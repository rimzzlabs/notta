import { Input } from '@/components/atoms'

import { isPseudoElement, twclsx } from '@/utils'

import { useCallback, useState } from 'react'
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi'

const Searchbar = () => {
  const [query, setQuery] = useState('')
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value), [query])

  return (
    <div
      className={twclsx(
        'relative w-full',
        'border border-main-900 dark:border-main-100',
        'focus-within:before:translate-x-0.5 focus-within:before:translate-y-0.5',
        isPseudoElement(true)
      )}
    >
      <Input
        placeholder='Find notes...'
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
