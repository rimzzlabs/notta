import Button from '@/components/atoms/Button'

import { twclsx } from '@/utils'

const IndexPage: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Button className={twclsx('py-2 px-4')}>Click Me</Button>
    </div>
  )
}

export default IndexPage
