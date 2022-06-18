/**
 * It takes a string, converts it to a Date object, and then formats it using the Indonesian locale
 */
export const fmt = (date: string) =>
  new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'long'
  }).format(new Date(date))
