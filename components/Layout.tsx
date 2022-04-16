import Navbar from "./Navbar"

const Layout: any = ({ children }: any) => {
  return (
    <div className="flex flex-col items-center font-Mono">
      <Navbar />
      <main className="mt-8">{children}</main>
    </div>
  )
}

export default Layout;