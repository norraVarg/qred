export const validatePhone = (phone: string): string | null => {
  const matchArray = phone.match(
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  )

  if (matchArray === null) {
    return 'Invalid phone number'
  }

  return null
}