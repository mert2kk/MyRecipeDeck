import Image from 'next/image'

export default function recipeCard() {
  const x = 42
  return (
    <div className="w-[500px] bg-[#f4f0e5] h-[250px] m-4 flex flex-row rounded-lg   ">
      <div className="w-2/5 flex items-center m-4 ">
        <Image
          src="/images/Pasta.jpg"
          alt="Recipe Photo"
          className="max-w-40 w-auto h-auto object-cover rounded-xl p-2"
          width={160}
          height={160}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="w-3/5 flex flex-col p-2 justify-center m-4">
        <div>
          <button className="flex float-right">
            {/* <Image src='/icons/heart.png' alt='Heart' width={16} height={16} /> */}
            <Image
              src="/icons/empty-heart.png"
              alt="Heart"
              width={16}
              height={16}
            />
          </button>
          <h1 className="text-gray-500 uppercase text-xs flex flex-row gap-2 items-center">
            <span>
              <svg
                width="18"
                height="18"
                className="mb-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M4.25 3.75C3.00736 3.75 2 4.75736 2 6V18C2 19.2426 3.00736 20.25 4.25 20.25H19.75C20.9926 20.25 22 19.2426 22 18V9C22 7.75736 20.9926 6.75 19.75 6.75H12.25C12.0139 6.75 11.7916 6.63885 11.65 6.45L10.3 4.65C9.87508 4.08344 9.2082 3.75 8.5 3.75H4.25Z"
                  fill="#17616e"
                />
              </svg>
            </span>
            Healthy Meals
          </h1>
          <h2 className="text-[#173B61] font-serif font-semibold">
            Pasta Vodka
          </h2>
        </div>

        <div className="flex flex-row  space-x-4 mt-2 mb-2 text-sm text-[#7697a0]">
          <p className="flex flex-col font-bold">
            50<span className="text-xs font-medium">Mins</span>
          </p>

          <div className="flex flex-row">
            <p className="flex flex-col font-bold">
              4<span className="text-xs font-medium">Serving</span>
            </p>
          </div>
          <div className="flex flex-row">
            <p className="flex flex-col font-bold">
              450<span className="text-xs font-medium">Kcal</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-semibold text-gray-600">Main Dish</p>
        <div className="flex flex-row mt-4  ">
          <button className="bg-[#fc4126] text-[#FFEBD0] px-4 py-2 rounded-2xl text-[12px] font-semibold ">
            View Recipe
          </button>
          <button className="bg-[#f4f0e5] text-gray-500 font-semibold text-[12px] ml-4 flex flex-row items-center justify-center space-x-2">
            <svg
              width="18"
              height="18"
              className=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                d="M4.25 3.75C3.00736 3.75 2 4.75736 2 6V18C2 19.2426 3.00736 20.25 4.25 20.25H19.75C20.9926 20.25 22 19.2426 22 18V9C22 7.75736 20.9926 6.75 19.75 6.75H12.25C12.0139 6.75 11.7916 6.63885 11.65 6.45L10.3 4.65C9.87508 4.08344 9.2082 3.75 8.5 3.75H4.25Z"
                fill="#17616e"
              />
            </svg>
            {/* <Image src='/icons/plus.png' alt='Add' width={10} height={10} className='absolute left-0' /> */}
            <p>Add to Collection</p>
          </button>
        </div>
      </div>
    </div>
  )
}
