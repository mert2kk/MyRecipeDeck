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
        w-12 h-12 
        rounded-xl
        transition-all duration-300 ease-out
        hover:-translate-x-1.5
        cursor-pointer
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={4}
        stroke="currentColor"
        className="w-4 h-4 text-brand-dark transition-colors group-hover:text-brand-dark/80"
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
