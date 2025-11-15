// app/(pages)/layout.tsx
import Header from '../components/common/Header' // Header yolun

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Header />

      <main className="flex flex-wrap items-center justify-center h-full">
        {children}
      </main>
    </div>
  )
}
