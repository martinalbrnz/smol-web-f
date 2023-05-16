import MovimientosForm from "~/components/movimientos-form";
import MovimientosList from "~/components/movimientos-list";

const Movimientos = () => {
  return (
    <div class="flex flex-1 gap-2 flex-wrap p-2">
      <MovimientosForm />
      <MovimientosList />
    </div>
  );
};

export default Movimientos;
