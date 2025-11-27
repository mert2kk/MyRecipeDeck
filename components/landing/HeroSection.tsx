'use client'
import { signIn, useSession } from 'next-auth/react' // 1. NextAuth hook'larını ekledik
import { useRouter } from 'next/navigation'
import RecipeCard from '../recipes/RecipeCard'

const HeroSection = () => {
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleLogin = async () => {
    if (session) {
      router.push('/recipes')
      return
    }
    await signIn('google', { callbackUrl: '/recipes' })
  }

  return (
    <section className="h-screen w-full snap-start bg-brand-bg flex items-center justify-center pb-6 overflow-hidden short:flex-none flex-col">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center short:gap-0">
        <div className="space-y-6 z-20 relative flex flex-col items-center text-center lg:text-start lg:items-start mt-10 lg:mt-0 short:mt-4 short:space-y-0 short:pt-10">
          <h1 className=" short:text-2xl text-5xl md:text-6xl font-bold text-brand-dark leading-tight  ">
            The Modern Way to <br /> Keep Recipes.
          </h1>
          <p className="text-xl text-brand-dark/80 max-w-md short:text-base">
            No clutter, just cards. Create recipe decks, track your macros, and
            import from social media in seconds.
          </p>

          <button
            onClick={handleLogin}
            disabled={status === 'loading'}
            className="bg-brand-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition shadow-lg flex items-center gap-2 max-h-[700px]:py-2 short:text-xs disabled:opacity-50"
          >
            {status === 'loading' ? (
              <span>Loading...</span>
            ) : session ? (
              <>
                Go to Recipes
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#FFFFFF"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#FFFFFF"
                  />
                </svg>
                Sign in with Google
              </>
            )}
          </button>
        </div>

        <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end z-10 scale-90 lg:scale-100 short:scale-60  ">
          {/* Card 3 */}
          <div className="absolute w-full max-w-[500px] transform -translate-x-12 translate-y-8 -rotate-3 opacity-70 blur-[1px]">
            <RecipeCard
              title="Blueberry Pancakes"
              category="Greens"
              image="/images/pancake.jpg"
              stats={{ time: '15', serving: '2', kcal: '320' }}
              className="pointer-events-none shadow-none"
            />
          </div>

          {/* CARD 2 */}
          <div className="absolute w-full max-w-[500px] transform translate-x-6 translate-y-4 rotate-2 opacity-90 z-20">
            <RecipeCard
              title=""
              category="Greek Salad"
              image="/images/salad.jpg"
              stats={{ time: '20', serving: '4', kcal: '580' }}
              className="pointer-events-none shadow-md"
            />
          </div>

          {/* card 1 */}
          <div className="absolute w-full max-w-[500px] transform  hover:rotate-8 rotate-4 -translate-y-6 transition-transform duration-500 z-30">
            <RecipeCard
              title="Pasta alla Vodka"
              category="Main Dish"
              image="/images/Pasta.jpg"
              stats={{ time: '50', serving: '4', kcal: '450' }}
              className="shadow-2xl pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
