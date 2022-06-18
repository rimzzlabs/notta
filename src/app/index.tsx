import { Header } from '@/components/organism'

import AppRoutes from '@/app/routes'
import useDarkMode from '@/hooks/useDarkMode'

// you can add Header, footer anything else you might want to, or else leave it to be
const App = () => {
  useDarkMode()
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}

export default App
