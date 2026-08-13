import type { ReactNode } from "react";

import styles from "./Layout.module.css";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props): ReactNode => {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
