import type { NextAuthConfig } from 'next-auth'
import { NextResponse } from 'next/server'

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isAdminPage = nextUrl.pathname.startsWith('/admin')

      if (isAdminPage) {
        if (isLoggedIn) {
          return true
        }

        return false
      } else if (isLoggedIn) {
        // open issue: User Keeps getting redirected to /login after successful Sign-In
        // https://github.com/vercel/next.js/issues/59218
        return NextResponse.redirect(new URL('/admin', nextUrl))
      }

      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig