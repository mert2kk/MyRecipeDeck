import CollectionCard from './CollectionCard'

export default function CollectionDeck() {
  return (
    // grid-cols-1 (mobile) -> grid-cols-2 (tablet) -> grid-cols-3 (desktop)
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
    </div>
  )
}
