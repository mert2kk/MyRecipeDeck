import Link from 'next/link'

export default function page() {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-20 2xl:max-w-[1800px]">
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#323544"
            className="w-8 h-8"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>

        <h2 className="text-3xl font-kalam font-bold text-gray-800 mb-2">
          No favorites yet.
        </h2>

        <p className="text-gray-500 max-w-xs mx-auto mb-8 leading-relaxed">
          Save the recipes you love to find them easily later.
        </p>

        <Link
          href="/recipes"
          className="
      group relative
      inline-flex items-center gap-2
      px-8 py-3.5
      bg-brand-orange text-white
      rounded-full
      font-semibold text-sm tracking-wide
      shadow-lg shadow-brand-orange/30
      transition-all duration-300 ease-out
      hover:shadow-brand-orange/50 hover:-translate-y-1 hover:bg-orange-600
      active:scale-95
    "
        >
          Browse Recipes
        </Link>
      </div>
      {/* <h1 className="font-bold text-3xl text-gray-800  font-kalam">
        My Favorite Recipes
      </h1>
      <RecipeList isFavoriteList={true} /> */}
    </div>
  )
}
