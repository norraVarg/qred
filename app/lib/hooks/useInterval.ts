import { useEffect } from 'react'

export const useInterval = (callback: () => void, delay = 500) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      callback()
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay, callback])
}