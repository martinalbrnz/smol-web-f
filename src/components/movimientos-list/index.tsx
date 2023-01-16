import { createSignal, For } from "solid-js";
import { movementList } from "./list-mock";
import styles from "./movimientos-list.module.scss";
import MovimientosTile from "./movimientos-tile";

const MovimientosList = () => {
  const [movements, setMovements] = createSignal(movementList);

  return (
    <div class={styles.listContainer}>
      <div class={styles.header}>
        <h2>Movimientos</h2>
      </div>
      <div class={styles.tileContainer}>
        <For each={movements()} fallback={<p>Cargando...</p>}>
          {(movement) => <MovimientosTile movement={movement} />}
        </For>
      </div>
    </div>
  );
};

export default MovimientosList;
