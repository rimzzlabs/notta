import { twclsx } from '@/utils'

import { createElement } from 'react'

type TextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

const Textarea: React.FunctionComponent<TextareaProps> = ({ className: classes, children, ...props }) => {
  const className = twclsx(
    'inline-flex w-full',
    'p-2 outline-none resize-none',
    'placeholder:dark:text-main-200',
    'bg-transparent',
    classes
  )

  return createElement('textarea', { ...props, className }, children)
}

export default Textarea
