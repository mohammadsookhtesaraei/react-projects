import type { ReactNode } from "react";

import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props): ReactNode => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;
