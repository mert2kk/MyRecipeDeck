import RecipeForm from '@/app/components/recipes/RecipeForm'

export default async function EditRecipePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <RecipeForm />
    </div>
  )
}
