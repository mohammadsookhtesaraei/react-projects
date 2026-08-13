import type { ReactNode } from "react"
import type { BookType } from "../../constants/mockData"

import styles from "./FavoriteBooks.module.css"


type Props={
liked:BookType[]

}

const FavoriteBooks = ({liked}:Props):ReactNode => {
  return (
    <div className={styles.container}>
      <h2>fav list</h2>
      {liked.map((item)=>(
        <div className={styles.card} key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  )
}
export default FavoriteBooks