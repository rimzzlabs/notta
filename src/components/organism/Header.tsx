import { ToggleDarkMode } from '@/components/mollecules'

import { twclsx } from '@/utils'

const Header: React.FunctionComponent = () => {
  return (
    <header className={twclsx('fixed inset-x-0 top-0', 'bg-main-50 dark:bg-main-900')}>
      <div
        className={twclsx(
          'layout',
          'flex items-center justify-between',
          'h-20 md:h-24',
          'border-b border-b-main-300 dark:border-b-main-700'
        )}
      >
        <p className={twclsx('text-2xl md:text-4xl font-bold', 'text-primary-500 dark:text-primary-400')}>Notta.</p>

        <ToggleDarkMode />
      </div>
    </header>
  )
}

export default Header
