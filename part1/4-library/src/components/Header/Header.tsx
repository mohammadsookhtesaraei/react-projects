import type { ReactNode } from "react";

import styles from "./Header.module.css";

const Header = (): ReactNode => {
  return (
    <header className={styles.header}>
      <p>book app</p>
    </header>
  );
};
export default Header;
