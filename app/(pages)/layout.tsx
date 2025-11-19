import Header from '../components/common/Header'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex items-center justify-center min-h-[calc(100vh-112px)] p-4 pt-8 w-full ">
        {children}
      </main>
    </div>
  )
}
