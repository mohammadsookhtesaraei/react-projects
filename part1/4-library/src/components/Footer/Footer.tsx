import type { ReactNode } from "react"

import styles from "./Footer.module.css"


const Footer = ():ReactNode => {
    const date=new Date().getFullYear()
  return (
    <footer className={styles.footer}>
        <p>developed by me &copy; {date}</p>
    </footer>
  )
}
export default Footer