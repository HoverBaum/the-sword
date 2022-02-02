/**
 * Converts a string to a boolean.
 * Defaulting to false for anything (including undefined)
 * other than "true".
 */
export const stringToBoolean = (str?: string): boolean => {
  if (!str) return false
  return str === 'true'
}
