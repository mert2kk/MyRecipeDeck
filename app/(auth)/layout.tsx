export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen w-full flex- flex-col">{children}</main>
}
