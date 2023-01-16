import Movement from "~/models/Movement";
import styles from "./movimientos-tile.module.scss";

interface MovementProps {
  movement: Movement;
}

const MovimientosTile = (props: MovementProps) => {
  return (
    <div class={styles.tile}>
      <div class={styles.dateSection}>
        <p class={styles.date}>{props.movement.date.toLocaleDateString()}</p>
        <p class={styles.description}>{props.movement.description}</p>
      </div>
      <div class={styles.amountSection}>
        <p>{props.movement.account}</p>
        <div>
          <p>$</p>
          <p>{props.movement.amount.toFixed(2)}</p>
          <p>{props.movement.currency}</p>
        </div>
      </div>
    </div>
  );
};

export default MovimientosTile;
