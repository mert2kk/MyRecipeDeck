'use client'
import Image from 'next/image'
import { useState } from 'react'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'
import FolderIcon from '../Icons/FolderIcon'
import AddCollectionMenu from './AddCollectionMenu'

export default function RecipeForm() {
  const [title, setTitle] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImagePreview(url)
    }
  }

  return (
    <div className="bg-[#f4f0e5] flex flex-col rounded-lg p-4 xl:h-full xl:flex-row relative items-center">
      <h1 className="text-gray-500  text-sm font-bold left-0 top-0 m-4 flex flex-row gap-2 items-center cursor-pointer absolute">
        <span>
          <FolderIcon />
        </span>
        <AddCollectionMenu />
      </h1>
      <button className="absolute top-0 right-0 m-4 cursor-pointer">
        {/* <FilledHeartIcon /> */}
        <EmptyHeartIcon />
      </button>
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-2/5">
        {/* Image Part */}
        <div className="w-4/5 flex p-8 flex-col justify-center items-center">
          <h2 className="text-[#173B61] font-serif font-semibold text-center">
            {title || 'Create New'}
          </h2>
          {/* Image Upload Box */}
          <label className="mt-4 bg-gray-200 border border-gray-300 border-dashed rounded-xl flex  text-gray-600 cursor-pointer h-80 w-80 items-center justify-center ">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Preview"
                width={320}
                height={320}
                className="object-cover rounded-xl w-80 h-80"
              />
            ) : (
              'Upload Image'
            )}
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Below Image */}
        <div className="w-4/5 flex flex-col p-2 justify-center items-center space-y-6">
          <div className="flex flex-row gap-4 text-lg text-[#7697a0] items-center justify-center">
            <div className="flex flex-col font-bold ">
              <input
                type="number"
                placeholder="50"
                className="w-20 p-1 rounded border border-gray-300 text-black font-bold text-center"
              />
              <span className="font-medium text-sm text-center">Mins</span>
            </div>

            <div className="flex flex-col font-bold">
              <input
                type="number"
                placeholder="4"
                className="w-20 p-1 rounded border border-gray-300 text-black font-bold text-center"
              />
              <span className="font-medium text-sm text-center">Serving</span>
            </div>

            <div className="flex flex-col font-bold">
              <input
                type="number"
                placeholder="450"
                className="w-20 p-1 rounded border border-gray-300 text-black font-bold text-center"
              />
              <span className="font-medium text-sm text-center">Kcal</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-gray-600 pb-4">Dish Type</p>
          </div>
        </div>
      </div>
      {/* Right Side (Form Fields) */}
      <div className="w-full p-8 h-full items-center flex justify-center text-center overflow-auto flex-col xl:mr-6">
        <div className="text-black flex flex-col space-y-8 w-full">
          <h1 className="font-bold text-xl">Create a Recipe</h1>

          {/* Title Input */}
          <div className="text-left flex flex-col">
            <label className="font-bold">Recipe Title</label>
            <input
              type="text"
              placeholder="Pasta alla Vodka"
              className="mt-1 border border-gray-300 rounded p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Ingredients */}
          <div className="text-left flex flex-col">
            <label className="font-bold">Ingredients</label>
            <textarea
              className="mt-1 border border-gray-300 rounded p-2 h-24"
              placeholder={`200 g pasta\n2 tbsp olive oil\n1 onion`}
            />
          </div>

          {/* Instructions */}
          <div className="text-left flex flex-col">
            <label className="font-bold">Instructions</label>
            <textarea
              className="mt-1 border border-gray-300 rounded p-2 h-24"
              placeholder={`1. Cook pasta\n2. Prepare sauce`}
            />
          </div>

          {/* Tips */}
          <div className="text-left flex flex-col">
            <label className="font-bold">Tips (Optional)</label>
            <textarea
              className="mt-1 border border-gray-300 rounded p-2 h-20"
              placeholder="Add any notes..."
            />
          </div>
        </div>
      </div>
      {/* Button */}
      <button className="bg-[#173B61] absolute bottom-0 right-0  hover:bg-[#1f4c7f] duration-300 text-white font-semibold p-2 px-4 m-0 rounded-l-xl rounded-bl-none shadow-md hover:shadow-xl">
        Save Recipe
      </button>
    </div>
  )
}
