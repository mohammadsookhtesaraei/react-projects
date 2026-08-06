import type { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}:{
    children:ReactNode
}):ReactNode => {
  return (
    <>
    <Header/>
    <main className="flex-1 container">{children}</main>
    <Footer/>
    </>
  )
}
export default Layout