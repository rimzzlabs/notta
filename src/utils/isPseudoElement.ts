import { twclsx } from './twclsx'

export const isPseudoElement = (isIt: boolean) =>
  isIt
    ? twclsx(
        'relative z-auto',
        'before:absolute before:z-[-1] before:inset-0',
        'before:translate-y-1 before:translate-x-1 before:transition-transform',
        'before:bg-main-900 dark:before:bg-main-100',
        'hover:before:translate-x-0.5 hover:before:translate-y-0.5'
      )
    : null
