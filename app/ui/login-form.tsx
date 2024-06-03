'use client'

import { authenticate } from '@/app/lib/actions'
import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  const { pending } = useFormStatus()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form action={dispatch} >
      <div className="flex flex-col space-y-8 rounded-lg bg-white px-6 pb-4 pt-8">
        <h2>Please sign in to continue.</h2>
        <div className="space-y-4 w-full">
          <div className='space-y-2'>
            <label className="block text-xs font-medium text-gray-900" htmlFor="email">
              Email
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-300 py-[9px] px-3 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              autoComplete='email'
            />
          </div>
          <div className='space-y-2 relative'>
            <label className="block text-xs font-medium text-gray-900" htmlFor="password">
              Password
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-300 py-[9px] pl-3 pr-7 text-sm outline-2 outline-sky-500 placeholder:text-gray-500 placeholder:text-xs"
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
              autoComplete="password"
            />
            <div onClick={toggleShowPassword} className='absolute right-2 top-7 cursor-pointer'>
              {showPassword ? (
                <svg className="size-3 fill-none stroke-gray-500 stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              ) : (
                <svg className="size-3 fill-none stroke-gray-500 stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <button aria-disabled={pending} className="bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold py-2 px-4 rounded self-center">
          Login
        </button>
        <div
          className="flex h-6 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (<p className="text-xs text-red-500">{errorMessage}</p>)}
        </div>
      </div>
    </form>
  )
}

export default LoginForm