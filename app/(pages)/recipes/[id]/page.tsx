import KnifeForkIcon from '@/app/components/Icons/KnifeForkIcon'
import Recipe from '@/app/components/recipes/Recipe'

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div
      className="h-[80vh] overflow-auto rounded-2xl w-[80vw] relative
        shadow-[0_10px_25px_rgba(0,0,0,0.15),0_20px_50px_rgba(0,0,0,0.1)]
         transition-all duration-1200 ease-in-out
         hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),0_25px_60px_rgba(0,0,0,0.12)]
         hover:-translate-y-1
         hover:scale-101
         hover:backdrop-brightness-102"
    >
      <div className="overflow-auto h-full">
        <Recipe />
      </div>
      <a
        href={`/recipes/${id}/edit`}
        className="text-[#173B61] flex items-center absolute bottom-0 right-0 p-2 px-4  gap-1 hover:bg-[#ffffff] rounded-l-xl rounded-bl-none font-semibold "
      >
        Edit this recipe
        <KnifeForkIcon />
      </a>
    </div>
  )
}
