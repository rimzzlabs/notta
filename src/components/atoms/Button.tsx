import { twclsx } from '@/utils'

import { createElement } from 'react'

type Button = {
  pseudoElement?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FunctionComponent<Button> = ({ pseudoElement = true, ...props }) => {
  const isPseudoElement = (isIt: boolean) =>
    isIt
      ? twclsx(
          'relative z-auto',
          'before:absolute before:z-[-1] before:inset-0',
          'before:translate-y-1 before:translate-x-1 before:transition-transform',
          'before:bg-main-900 dark:before:bg-primary-500',
          'hover:before:translate-x-0.5 hover:before:translate-y-0.5'
        )
      : null

  const className = twclsx(
    'inline-flex items-center',
    'border outline-none transition-all',
    'border-main-900 dark:border-primary-500',
    'text-main-900 dark:text-primary-500',
    'bg-main-50 dark:bg-main-900',
    'focus-visible:ring focus-visible:rounded ring-primary-400 dark:ring-primary-400',
    'ring-offset-2 ring-offset-main-50 dark:ring-offset-main-900',
    isPseudoElement(pseudoElement),
    props.className
  )

  return createElement('button', { ...props, className })
}

export default Button
