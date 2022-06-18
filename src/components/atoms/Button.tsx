import { isPseudoElement, twclsx } from '@/utils'

import { createElement } from 'react'

type Button = {
  pseudoElement?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FunctionComponent<Button> = ({ pseudoElement = true, ...props }) => {
  const className = twclsx(
    'inline-flex items-center',
    'border outline-none transition-all',
    'border-main-900 dark:border-main-200',
    'text-main-900 dark:text-main-200',
    'bg-main-50 dark:bg-main-900',
    'focus-visible:ring focus-visible:rounded ring-primary-400 dark:ring-primary-400',
    'ring-offset-2 ring-offset-main-50 dark:ring-offset-main-900',
    isPseudoElement(pseudoElement),
    props.className
  )

  return createElement('button', { ...props, className })
}

export default Button
