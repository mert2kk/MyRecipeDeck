'use client'
import Image from 'next/image'
import { useState } from 'react'
import AddFolderIcon from '../Icons/AddFolderIcon'
import EmptyHeartIcon from '../Icons/EmptyHeartIcon'
import FilledHeartIcon from '../Icons/FilledHeartIcon'
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
    <div className="bg-[#f4f0e5] flex flex-row rounded-lg w-full ">
      {/* Left Side */}
      <div className="flex flex-col h-aut justify-center items-center w-2/5">
        {/* Image Part */}
        <div className="w-full flex p-8 flex-col h-full">
          <div className="flex flex-col relative ">
            <button className="absolute right-0 cursor-pointer">
              <FilledHeartIcon />
              <EmptyHeartIcon />
            </button>

            <h1 className="text-gray-500 uppercase text-xs flex flex-row gap-2 items-center cursor-pointer">
              <span>
                <FolderIcon />
              </span>
              <AddCollectionMenu />
            </h1>

            <h2 className="text-[#173B61] font-serif font-semibold">
              {title || 'Create New'}
            </h2>
          </div>
          <div className="flex items-center justify-center">
            {/* Image Upload Box */}
            <label className="mt-4 bg-gray-200 border border-gray-300 border-dashed rounded-xl flex  text-gray-600 cursor-pointer max-w-80">
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
        </div>

        {/* Below Image */}
        <div className="w-4/5 flex flex-col p-2 justify-center items-center space-y-6">
          <div className="flex flex-row gap-4 text-lg text-[#7697a0] flex-wrap items-center justify-center">
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
            <p className="font-semibold text-gray-600 pb-4">Category</p>

            <button className="bg-[#f4f0e5] text-gray-500 font-semibold text-[12px] flex flex-row items-center justify-center pb-2 space-x-2 cursor-pointer">
              <AddFolderIcon />
              <p>Main Dish</p>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (Form Fields) */}
      <div className="w-3/5 p-8 h-auto items-center flex justify-center text-center overflow-auto">
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

          {/* Button */}
          <button className="bg-[#173B61] hover:bg-[#1f4c7f] duration-300 text-white font-semibold py-2 rounded shadow-md hover:shadow-xl">
            Save Recipe
          </button>
        </div>
      </div>
    </div>
  )
}
