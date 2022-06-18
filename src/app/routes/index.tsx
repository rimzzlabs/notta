import LayoutMain from '@/layouts'

import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const IndexPage = lazy(() => import('@/pages'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutMain />}>
        <Route
          index
          element={
            <Suspense fallback={null}>
              <IndexPage />
            </Suspense>
          }
        />

        {/* Other Routes here */}
      </Route>
    </Routes>
  )
}

export default MyRoutes
