import { Skeleton } from '@/components/ui/skeleton'

export default function RecipeCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 p-4 border rounded-xl shadow-sm bg-white">
      <Skeleton className="h-48 w-full rounded-lg" />

      <Skeleton className="h-6 w-3/4" />

      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <div className="flex gap-2 mt-2">
        <Skeleton className="h-8 w-20 rounded-full" />
      </div>
    </div>
  )
}
