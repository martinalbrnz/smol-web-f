import { For } from "solid-js";
import Account from "~/models/Account";
import styles from "./cuentas-list.module.scss";
import CuentasTile from "./cuentas-tile";

export interface CuentasListProps {
  accounts: Account[];
}
const CuentasList = ({ accounts }: CuentasListProps) => {
  return (
    <div class={styles.listContainer}>
      <div class={styles.header}>
        <span>Cuentas</span>
      </div>
      <div class={styles.tileContainer}>
        <For each={accounts} fallback={<p>Cargando...</p>}>
          {(account) => <CuentasTile account={account} />}
        </For>
      </div>
    </div>
  );
};

export default CuentasList;
