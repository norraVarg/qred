'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import useClickOutside from '../lib/hooks/useClickOutside'
import { signOutAction } from '../lib/actions'

const NAV_ITEMS = [
  { name: 'Home', href: '/admin' },
  { name: 'Users', href: '/admin/users' },
]

const NavBar = () => {
  const [showAccountMenu, setAccountMenu] = useState(false)
  const [showNavMenu, setShowNavMenu] = useState(false)
  const pathname = usePathname()

  const accountMenuRef = useRef(null)
  const hideAccountMenu = () => {
    if (showAccountMenu) {
      setAccountMenu(false)
    }
  }
  useClickOutside(accountMenuRef, hideAccountMenu)

  const navMenuRef = useRef(null)
  const hideNavMenu = () => {
    if (showNavMenu) {
      setShowNavMenu(false)
    }
  }
  useClickOutside(navMenuRef, hideNavMenu)

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu)
  }

  const toggleAccountMenu = () => {
    setAccountMenu(!showAccountMenu)
  }

  return (
    <nav className="bg-sky-500">
      <div className="max-w-7xl ">
        <div className="relative flex h-12 items-center sm:px-7">
          <div className="absolute inset-y-0 left-3 flex items-center sm:hidden">
            <button onClick={toggleNavMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-1 text-white hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="fill-curretn size-5 block h-6 w-6 stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <span className="flex flex-shrink-0 items-center text-white font-bold">Qred App</span>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {NAV_ITEMS.map((item) => (
                  <Link onClick={() => setShowNavMenu(false)} href={item.href} key={item.name} className={`text-white hover:bg-sky-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${pathname === item.href ? 'bg-sky-700' : ''}`}> {item.name}</Link>
                ))}
              </div>
            </div>
          </div>
          <div ref={accountMenuRef} className="absolute inset-y-0 right-1 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <button onClick={toggleAccountMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-1 text-white hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white" id="account-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open account menu</span>
                <svg className="fill-current size-5 stroke-white stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>

              {showAccountMenu && (
                <div onClick={hideAccountMenu} className="absolute right-0 z-10 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="account-menu-button" tabIndex={-1}>
                  <Link href="/admin/account" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}>Account</Link>
                  <button className="flex w-full px-4 py-2 text-sm text-gray-700"
                    onClick={() => signOutAction()}>Sign out</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showNavMenu && (
        <div ref={navMenuRef} className="space-y-1 p-2">
          {NAV_ITEMS.map((item) => (
            <Link onClick={() => setShowNavMenu(false)} href={item.href} key={item.name} className={`text-white hover:bg-sky-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${pathname === item.href ? 'bg-sky-700' : ''}`}> {item.name}</Link>
          ))}
        </div>
      )}
    </nav >
  )
}

export default NavBar