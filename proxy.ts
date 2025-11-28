import { JWT } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextRequest } from 'next/server'

export default withAuth({
  pages: {
    signIn: '/', // if you doesnt signed in
  },
  callbacks: {
    authorized: ({ req, token }: { req: NextRequest; token: JWT | null }) => {
      //Signed In
      if (token) return true

      const path = req.nextUrl.pathname
      //No Signed in
      if (path === '/' || path === '/register' || path === '/login') {
        return true
      }

      // Neither
      return false
    },
  },
})

export const config = {
  //Negative matching used for only prevent reaching static files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
