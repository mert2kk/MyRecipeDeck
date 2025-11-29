// className prop'u ile dışarıdan genişlik/yükseklik verebilmemizi sağlar
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 ${className || ''}`}
    />
  )
}
