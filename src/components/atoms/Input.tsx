import { twclsx } from '@/utils'

import { createElement } from 'react'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FunctionComponent<InputProps> = ({ className: classes, children, ...props }) => {
  const className = twclsx(
    'inline-flex p-2 rounded outline-none',
    'border transition-all',
    'border-main-300 dark:border-main-600',
    'placeholder:dark:text-main-500',
    'bg-white dark:bg-main-800',
    classes
  )

  return createElement('input', { ...props, type: props.type ? props.type : 'text', className }, children)
}

export default Input
