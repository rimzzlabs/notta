import { twclsx } from '@/utils'

import { createElement } from 'react'

type InputProps = { pseudoElement?: boolean } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: React.FunctionComponent<InputProps> = ({ className: classes, ...props }) => {
  const className = twclsx(
    'inline-flex p-2 outline-none',
    'border border-main-900 dark:border-main-100',
    'placeholder:dark:text-main-200',
    'bg-white dark:bg-main-900',
    classes
  )

  return createElement('input', { ...props, autoCorrect: 'off', type: props.type ? props.type : 'text', className })
}

export default Input
