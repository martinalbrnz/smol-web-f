import Movement from "~/models/Movement";

interface MovementProps {
  movement: Movement;
}

const MovimientosTile = (props: MovementProps) => {
  return (
    <div class="grid grid-cols-5 rounded p-1 bg-white shadow ">
      <div class="col-span-4">
        <p class="text-sm">{props.movement.date.toLocaleDateString()}</p>
        <p class="text-md truncate max-w-max">{props.movement.description}</p>
      </div>
      <div class="flex flex-col justify-between p-1">
        <p class="text-center">{props.movement.account}</p>
        <div class="flex justify-between">
          <p>$</p>
          <p>{props.movement.amount.toFixed(2)}</p>
          <p>{props.movement.currency}</p>
        </div>
      </div>
    </div>
  );
};

export default MovimientosTile;
