import NavBar from '@/app/ui/nav-bar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="fixed w-full">
        <NavBar />
      </div>
      <div className="grow pt-12 overflow-y-hidden">{children}</div>
    </div>
  )
}