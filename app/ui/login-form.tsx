'use client'

import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'

const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  const { pending } = useFormStatus()

  return (
    <form action={dispatch} >
      <div className="flex flex-col rounded-lg bg-white px-6 pb-4 pt-8 space-y-5">
        <h2>Please log in to continue.</h2>
        <div className="space-y-4 w-full">
          <div className='space-y-2'>
            <label
              className="block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label
              className="block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <button aria-disabled={pending} className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded self-center">
          Login
        </button>
        <div
          className="flex  h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-xs text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  )
}

export default LoginForm