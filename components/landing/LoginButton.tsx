'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    await signIn('google', { callbackUrl: '/recipes' })
  }

  return (
    <>
      <button
        onClick={handleLogin}
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-transform active:scale-95 shadow-lg flex items-center gap-2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M21.5939 11.0792H12.3209V13.8256H18.9768C18.6214 17.6382 15.5196 19.286 12.5148 19.286C8.70223 19.286 5.30969 16.3135 5.30969 12.0162C5.30969 7.88057 8.54068 4.74651 12.5148 4.74651C15.5519 4.74651 17.3936 6.71741 17.3936 6.71741L19.2676 4.74651C19.2676 4.74651 16.7474 2.00016 12.3856 2.00016C6.6344 1.96785 2.24023 6.78203 2.24023 11.9839C2.24023 17.0243 6.37592 22 12.4825 22C17.8783 22 21.7554 18.349 21.7554 12.8886C21.7877 11.7578 21.5939 11.0792 21.5939 11.0792Z"
            fill="#dfebed"
          />
        </svg>
        <span>Sign in with Google</span>
      </button>

      {/* Loading*/}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark/90 backdrop-blur-md transition-all">
          {/* Kart Alanı */}
          <div className="relative h-24 w-32 mb-8 flex items-end justify-center">
            {/* Card 3 */}
            <div
              className="absolute h-24 w-32 bg-brand-orange rounded-xl border border-white origin-bottom animate-shuffle-left shadow-lg flex items-center justify-center"
              //   style={{ animationDelay: '0.5s' }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M7.83845 4.4604C8.64653 2.99434 10.2069 2 12.001 2C13.7946 2 15.3546 2.99377 16.1628 4.45912C17.7246 4.08924 19.4071 4.76328 20.2507 6.22444C21.2805 8.00807 20.6693 10.2888 18.8857 11.3186L18.3923 11.6034V15.5H5.54006V11.5651L5.1152 11.3198C3.33157 10.29 2.72046 8.00927 3.75023 6.22564C4.5939 4.76437 6.27659 4.09033 7.83845 4.4604Z"
                  fill="#242d4d"
                />
                <path
                  d="M5.54006 17V20C5.54006 20.4142 5.87584 20.75 6.29006 20.75H17.6423C18.0565 20.75 18.3923 20.4142 18.3923 20V17H5.54006Z"
                  fill="#242d4d"
                />
              </svg>
            </div>

            {/* Card 2 Middle */}
            <div
              className="absolute h-24 w-32 bg-brand-orange rounded-xl border border-white origin-bottom animate-shuffle-right shadow-lg flex items-center justify-center "
              style={{ animationDirection: 'reverse', animationDuration: '1s' }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M7.83845 4.4604C8.64653 2.99434 10.2069 2 12.001 2C13.7946 2 15.3546 2.99377 16.1628 4.45912C17.7246 4.08924 19.4071 4.76328 20.2507 6.22444C21.2805 8.00807 20.6693 10.2888 18.8857 11.3186L18.3923 11.6034V15.5H5.54006V11.5651L5.1152 11.3198C3.33157 10.29 2.72046 8.00927 3.75023 6.22564C4.5939 4.76437 6.27659 4.09033 7.83845 4.4604Z"
                  fill="#242d4d"
                />
                <path
                  d="M5.54006 17V20C5.54006 20.4142 5.87584 20.75 6.29006 20.75H17.6423C18.0565 20.75 18.3923 20.4142 18.3923 20V17H5.54006Z"
                  fill="#242d4d"
                />
              </svg>
            </div>

            {/* Card 1 Fixed */}
            <div className="absolute h-24 w-32 bg-brand-orange rounded-xl shadow-2xl border border-white flex items-center justify-center z-10 animate-pulse-slow">
              {/* Logo */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M7.83845 4.4604C8.64653 2.99434 10.2069 2 12.001 2C13.7946 2 15.3546 2.99377 16.1628 4.45912C17.7246 4.08924 19.4071 4.76328 20.2507 6.22444C21.2805 8.00807 20.6693 10.2888 18.8857 11.3186L18.3923 11.6034V15.5H5.54006V11.5651L5.1152 11.3198C3.33157 10.29 2.72046 8.00927 3.75023 6.22564C4.5939 4.76437 6.27659 4.09033 7.83845 4.4604Z"
                  fill="#242d4d"
                />
                <path
                  d="M5.54006 17V20C5.54006 20.4142 5.87584 20.75 6.29006 20.75H17.6423C18.0565 20.75 18.3923 20.4142 18.3923 20V17H5.54006Z"
                  fill="#242d4d"
                />
              </svg>
            </div>
          </div>

          {/* text */}
          <h2 className="text-2xl font-bold text-white tracking-wider  mt-10 flex items-center gap-3">
            Shuffling Deck
            <div className="flex gap-1 mt-2">
              <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
            </div>
          </h2>
          <p className="text-brand-orange text-sm mt-2 font-medium">
            Preparing your kitchen
          </p>
        </div>
      )}
    </>
  )
}
