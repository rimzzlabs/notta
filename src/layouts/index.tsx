import { twclsx } from '@/utils'

import { Outlet } from 'react-router-dom'

const LayoutMain = (): JSX.Element => {
  return (
    <>
      <main className={twclsx('layout', 'relative', 'mt-20 md:mt-24', 'py-4')}>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutMain
