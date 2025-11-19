import RightArrow from '../Icons/RightArrow'
import ThreeDots from '../Icons/ThreeDots'

export default function RecipeDeck() {
  const cards = [
    { top: -6, left: 4, rotate: -12, opacity: 80 },
    { top: -3, left: -5, rotate: 10, opacity: 75 },
    { top: 0, left: 5, rotate: -8, opacity: 70 },
    { top: 3, left: -2, rotate: 6, opacity: 85 },
    { top: 1, left: 3, rotate: 4, opacity: 80 },
    { top: 5, left: -3, rotate: -6, opacity: 70 },
    { top: 2, left: 2, rotate: 9, opacity: 65 },
    { top: -4, left: -1, rotate: -9, opacity: 60 },
    { top: 6, left: 1, rotate: 7, opacity: 55 },
    { top: 1, left: -4, rotate: -4, opacity: 50 },
  ]

  return (
    <div className="relative w-full h-80 max-w-[450px]">
      {/* Deck Effect */}
      {cards.map((c, idx) => (
        <div
          key={idx}
          className="absolute w-full h-full bg-[#F4F0E5] rounded-xl shadow-md border border-[#87847c] border-opacity-70"
          style={{
            top: `${c.top}px`,
            left: `${c.left}px`,
            transform: `rotate(${c.rotate}deg)`,
            opacity: c.opacity / 100,
          }}
        />
      ))}

      {/* Top card */}
      <div className="group relative z-10  w-full h-full bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
        {/* --- IMAGE SECTION (Sadece Zoom Efekti) --- */}
        <div className="h-[60%] w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
            alt="Deck Cover"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

          {/* 3 Dots Menu */}
          <button className="absolute top-3 right-3 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-colors">
            <ThreeDots />
          </button>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              Healthy Meals
            </h3>

            {/* Text Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">
                Healthy
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">
                Vegan
              </span>
            </div>
          </div>

          {/*Footer */}
          <div className="flex items-center justify-between pt-4">
            <span className="text-sm font-semibold text-gray-500">
              12 Recipe Cards
            </span>

            {/* Arrow Icon */}
            <div className=" group-hover:translate-x-2 transition-transform duration-300">
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
