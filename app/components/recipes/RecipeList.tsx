import React from 'react'
import RecipeCard from './RecipeCard'
export default function RecipeList() {
  return (
    <div className='flex flex-col p-10 w-screen flex-wrap'>
      <div className='flex flex-row space-x-4 flex-wrap'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  )
}
