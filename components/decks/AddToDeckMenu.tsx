'use client'

import { toggleRecipeInDeckAction } from '@/app/actions/recipeActions'
import { IDeck } from '@/app/types/deck'
import { useEffect, useRef, useState } from 'react'
import CardsIcon from '../Icons/CardsIcon'

interface AddToDeckMenuProps {
  decks?: IDeck[]
  recipeId: string
}
export default function AddToDeckMenu({ decks, recipeId }: AddToDeckMenuProps) {
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

  const handleRecipeInDeckAction = (deckId: string, recipeId: string) => {
    toggleRecipeInDeckAction(deckId, recipeId)
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
        <div className="absolute -right-7 top-full  w-48 z-50 origin-bottom-right animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden ring-1 ring-black/5">
            {/* Header */}
            <div className="px-3 py-2 border-b border-gray-100/50">
              <p className="text-[10px] font-bold text-[#173B61]/60 uppercase tracking-widest">
                Select Deck
              </p>
            </div>

            {/* List */}
            {decks && (
              <ul className="py-1 max-h-40 overflow-y-auto custom-scrollbar">
                {decks.map((deck) => {
                  const isAdded = deck.recipes.includes(recipeId)
                  return (
                    <li key={deck._id}>
                      <button
                        onClick={() =>
                          handleRecipeInDeckAction(deck._id, recipeId)
                        }
                        className="group w-full text-left px-3 py-2 text-xs font-medium text-[#173B61] hover:bg-[#fc4126]/10 hover:text-[#fc4126] transition-all flex items-center gap-2"
                      >
                        {/* GÖRSEL İŞARETLEYİCİ */}
                        <div
                          className={`flex items-center justify-center w-3 h-3 rounded-full border transition-all duration-200
                            ${
                              isAdded
                                ? 'bg-[#fc4126] border-[#fc4126]'
                                : 'bg-transparent border-gray-300 group-hover:border-[#fc4126]'
                            }
                          `}
                        >
                          {isAdded && (
                            <svg
                              className="w-2 h-2 text-white stroke-3"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                d="M5 13l4 4L19 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>

                        <span
                          className={`truncate ${isAdded ? 'font-bold' : ''}`}
                        >
                          {deck.name}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}

            <div className="p-2 border-t border-gray-100/50 bg-gray-50/50">
              <button className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-[10px] font-bold text-[#fc4126] bg-white hover:bg-[#fc4126] hover:text-white border border-[#fc4126]/20 hover:border-[#fc4126] rounded-lg transition-all shadow-sm">
                <span>+</span> Create New
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
