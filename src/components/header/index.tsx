import { A } from "solid-start";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div class={styles.header}>
      <A href="/">Home</A>
      <A href="/presupuestos" activeClass={styles.activeLink}>
        Presupuestos
      </A>
    </div>
  );
};

export default Header;
