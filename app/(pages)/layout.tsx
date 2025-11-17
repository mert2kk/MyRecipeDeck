// app/(pages)/layout.tsx
import Header from '../components/common/Header' // Header yolun

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <main className="flex items-center justify-center min-h-[calc(100vh-112px)] p-4 min-w-screen ">
        {children}
      </main>
    </div>
  )
}
