import { Searchbar } from '@/components/mollecules'
import { NotesEditor } from '@/components/organism'

import { twclsx } from '@/utils'

const IndexPage: React.FunctionComponent = () => {
  return (
    <>
      <Searchbar />
      <section className={twclsx('py-4 md:py-8')}>
        <h2 className={twclsx('my-4')}>Create a new Note</h2>
        <NotesEditor />
      </section>
    </>
  )
}

export default IndexPage
