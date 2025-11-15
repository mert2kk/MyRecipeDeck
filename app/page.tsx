'use client'
import { useRouter } from 'next/navigation'
import Landing from './components/landing/Landing'

export default function Home() {
  const router = useRouter()

  const handleLogin = () => {
    console.log('Giriş yapılıyor...')

    router.push('/recipes')
  }

  return (
    <div>
      <div>
        <button onClick={handleLogin}>Sign in & Go</button>
      </div>
      <Landing />
    </div>
  )
}
