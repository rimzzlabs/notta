import { twclsx } from '@/utils'

import { createElement } from 'react'

type TextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

const Textarea: React.FunctionComponent<TextareaProps> = ({ className: classes, children, ...props }) => {
  const className = twclsx(
    'inline-flex w-full',
    'p-2 rounded outline-none resize-none h-40',
    'border transition-all overflow-y-auto',
    'border-main-300 dark:border-main-600',
    'placeholder:dark:text-main-500',
    'bg-white dark:bg-main-800',
    classes
  )

  return createElement('textarea', { ...props, className }, children)
}

export default Textarea
