import { createSignal, For } from "solid-js";
import { movementList } from "./list-mock";
import MovimientosTile from "./movimientos-tile";

const MovimientosList = () => {
  const [movements, setMovements] = createSignal(movementList);

  return (
    <div class="flex flex-1 flex-col rounded shadow bg-gray-100 min-w-[320px]">
      <div class="flex items-center justify-center rounded-t text-white bg-teal-500 h-11">
        <span>Movimientos</span>
      </div>
      <div class="flex flex-col gap-1 p-2">
        <For each={movements()} fallback={<p>Cargando...</p>}>
          {(movement) => <MovimientosTile movement={movement} />}
        </For>
      </div>
    </div>
  );
};

export default MovimientosList;
