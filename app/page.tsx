'use client'

import { useState } from 'react'
import Header from './components/common/Header'
import Landing from './components/landing/Landing'
import Dashboard from './components/recipes/Dashboard'

export default function Home(handleSignOut: () => void) {
  const [userSignedIn, setUserSignedIn] = useState(false)

  if (userSignedIn) {
    return (
      <div className="flex flex-col">
        <Header />
        <Dashboard />
      </div>
    )
  } else {
    return (
      <div>
        {userSignedIn}
        <div>
          <button onClick={() => setUserSignedIn(!userSignedIn)}>
            Signed in
          </button>
        </div>
        <Landing />
      </div>
    )
  }
}
