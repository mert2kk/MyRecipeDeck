'use client'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      aria-label="Go Back"
      className="
        group
        flex items-center justify-center
        w-12 h-9 
        bg-white/70 backdrop-blur-md
        border border-gray-200/50
        rounded-xl
        shadow-sm  hover:shadow-brand-dark/40
        transition-all duration-300 ease-out
        hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-x-0.5
        active:scale-95
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4 text-gray-600 transition-colors group-hover:text-gray-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  )
}
