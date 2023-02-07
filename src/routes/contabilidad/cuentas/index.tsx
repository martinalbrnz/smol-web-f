import CuentasForm from "~/components/cuentas-form";
import CuentasList from "~/components/cuentas-list";
import { accountsList } from "~/components/cuentas-list/list-mock";

const Cuentas = () => {
  return (
    <div>
      <CuentasForm />
      <CuentasList accounts={accountsList} />
    </div>
  );
};

export default Cuentas;
