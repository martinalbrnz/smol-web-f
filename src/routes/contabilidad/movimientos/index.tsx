import MovimientosForm from "~/components/movimientos-form";
import MovimientosList from "~/components/movimientos-list";
import styles from "./movimientos.module.scss";

const Movimientos = () => {
  return (
    <div class={styles.movimientosContainer}>
      <MovimientosForm />
      <MovimientosList />
    </div>
  );
};

export default Movimientos;
