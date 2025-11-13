import React from 'react'
import RecipeList from './RecipeList'
import Header from '../common/Header'

export default function Dashboard() {
  return (
    <div className='flex flex-col'>
      <RecipeList />
    </div>
  )
}
