import CollectionDeck from '@/app/components/collections/CollectionDeck'

export default function Page() {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center gap-8 2xl:max-w-[1800px]">
      <h1 className="font-bold text-3xl text-gray-800">CollectionDeck</h1>

      <CollectionDeck />
    </div>
  )
}
