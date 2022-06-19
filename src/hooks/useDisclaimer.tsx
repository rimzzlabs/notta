import { disclaimerApp } from '@/app/store'

import { useAtom } from 'jotai'

const useDisclaimer = () => {
  const [status, setStatus] = useAtom(disclaimerApp)

  const toggleDisclaimer = () => setStatus((prev) => ({ ...prev, isVisible: !prev.isVisible }))

  return {
    status,
    toggleDisclaimer
  }
}

export default useDisclaimer
