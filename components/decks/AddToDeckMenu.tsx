'use client'

import { IDeck } from '@/app/types/deck'
import { useEffect, useRef, useState } from 'react'
import CardsIcon from '../Icons/CardsIcon'

interface AddToDeckMenuProps {
  decks?: IDeck[]
}
export default function AddToDeckMenu({ decks }: AddToDeckMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleAddToDeck = (deckId: string) => {
    console.log(`Tarif Deck ID: ${deckId} içine eklendi.`)
    setIsOpen(false)
    // Buraya API isteği gelecek
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center gap-1 p-2.5 rounded-xl transition-colors border cursor-pointer
          ${
            isOpen
              ? 'bg-gray-100 text-[#173B61] border-gray-300'
              : 'bg-gray-50 hover:bg-gray-100 text-black hover:text-[#173B61] border-transparent hover:border-gray-200'
          }`}
      >
        <CardsIcon />
        <span className="text-lg leading-none">+</span>
      </button>

      {/* --- Dropdown Menu --- */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-red-200 rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Select Deck
            </p>
          </div>

          {decks && (
            <ul className="py-1">
              {decks.map((deck) => (
                <li key={deck._id}>
                  <button
                    onClick={() => handleAddToDeck(deck._id)}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    {deck.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="border-t border-gray-100 p-1">
            <button className="w-full text-left px-3 py-2 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1">
              + New Deck
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
