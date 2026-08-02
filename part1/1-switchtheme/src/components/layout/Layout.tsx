import type { ReactNode } from "react"
import Header from "./header/Header"

type LayoutProps={
    children:ReactNode
}

const Layout = ({children}:LayoutProps):ReactNode => {
  return (
    <>
     
    <Header/>
     <main>
        {children}
     </main>

    </>
  )
}
export default Layout