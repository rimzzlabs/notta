import { Button } from '@/components/atoms'

import useDarkMode from '@/hooks/useDarkMode'
import { twclsx } from '@/utils'

import { HiOutlineMoon as Moon, HiOutlineSun as Sun } from 'react-icons/hi'

const ToggleDarkMode: React.FunctionComponent = () => {
  const { theme, toggleTheme } = useDarkMode()

  return (
    <Button
      title='switch theme'
      onClick={toggleTheme}
      className={twclsx('justify-center', 'w-10 h-10 md:w-12 md:h-12', 'text-lg md:text-xl')}
    >
      <span className='sr-only'>{`switch to ${theme === 'light' ? 'dark' : 'light'} mode`}</span>
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  )
}
export default ToggleDarkMode
