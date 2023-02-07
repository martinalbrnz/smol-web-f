import CuentasForm from "~/components/cuentas-form";
import CuentasList from "~/components/cuentas-list";
import { accountsList } from "~/components/cuentas-list/list-mock";
import styles from "./cuentas.module.scss";

const Cuentas = () => {
  return (
    <div class={styles.cuentasContainer}>
      <CuentasForm />
      <CuentasList accounts={accountsList} />
    </div>
  );
};

export default Cuentas;
