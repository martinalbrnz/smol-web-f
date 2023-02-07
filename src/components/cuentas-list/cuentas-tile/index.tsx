import Account from "~/models/Account";
import styles from "./cuentas-tile.module.scss";

export interface CuentasTileProps {
  account: Account;
}

const CuentasTile = ({ account }: CuentasTileProps) => {
  return (
    <div class={styles.tile}>
      <div class={styles.dateSection}>
        <p class={styles.name}>{account.name}</p>
      </div>
      <div class={styles.balanceSection}>
        <p>$</p>
        <p>{account.balance.toFixed(2)}</p>
        <p>{account.currency}</p>
      </div>
    </div>
  );
};

export default CuentasTile;
