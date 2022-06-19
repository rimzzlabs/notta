import { Button } from '@/components/atoms'

import useDisclaimer from '@/hooks/useDisclaimer'
import { twclsx } from '@/utils'

import { useEffect, useRef } from 'react'

const Disclaimer: React.FunctionComponent = () => {
  const { status, toggleDisclaimer } = useDisclaimer()
  const ref = useRef<HTMLDivElement>(null)

  const manageClassName = () => {
    if (ref.current) {
      ref.current.classList.toggle('hidden')
      const timer = setTimeout(() => {
        if (ref.current) {
          ref.current.classList.toggle('opacity-0')
          ref.current.classList.toggle('-translate-y-20')
          ref.current.classList.toggle('md:-translate-y-24')
        }
      }, 100)

      return timer
    }
  }

  useEffect(() => {
    const timer = manageClassName()

    return () => clearTimeout(timer as NodeJS.Timeout)
  }, [status.isVisible])

  if (!status.isVisible) return null

  return (
    <section
      ref={ref}
      className={twclsx(
        'layout',
        'fixed top-20 md:top-24',
        'hidden transition-all duration-300',
        'opacity-0 -translate-y-20 md:-translate-y-24',
        'z-[51]'
      )}
    >
      <div
        className={twclsx(
          'flex flex-col md:flex-row items-center justify-center',
          'w-full py-4 px-4 gap-4',
          'bg-primary-500 text-white'
        )}
      >
        <p>{status.message}</p>
        <Button onClick={toggleDisclaimer} className={twclsx('p-2 self-end')}>
          Got It
        </Button>
      </div>
    </section>
  )
}

export default Disclaimer
