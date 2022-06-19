import { Button } from '@/components/atoms'

import useDisclaimer from '@/hooks/useDisclaimer'
import { twclsx } from '@/utils'

import { HiOutlineX as Close, HiOutlineInformationCircle as Open } from 'react-icons/hi'

const ToggleDisclaimer: React.FunctionComponent = () => {
  const { status, toggleDisclaimer } = useDisclaimer()

  return (
    <Button
      title='show disclaimer, a modal will show'
      onClick={toggleDisclaimer}
      className={twclsx('justify-center', 'w-10 h-10 md:w-12 md:h-12', 'text-lg md:text-xl')}
    >
      <span className='sr-only'>Show Disclaimer</span>
      {status.isVisible ? <Close /> : <Open />}
    </Button>
  )
}

export default ToggleDisclaimer
