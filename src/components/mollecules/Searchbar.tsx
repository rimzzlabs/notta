import { Input } from '@/components/atoms'

import useNotes from '@/hooks/useNotes'
import { isPseudoElement, twclsx } from '@/utils'

import { HiOutlineSearch as SearchIcon } from 'react-icons/hi'

const Searchbar = () => {
  const { query, handleQuery } = useNotes()

  return (
    <section className={twclsx('sticky top-20 md:top-24 z-50')}>
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
          onChange={handleQuery}
        />
        <div className={twclsx('absolute right-0', 'inline-flex items-center justify-center', 'w-10 h-full text-lg')}>
          <SearchIcon />
        </div>
      </div>
    </section>
  )
}

export default Searchbar
