import { createForm } from "@felte/solid";
import { validator } from "@felte/validator-zod";
import { z } from "zod";
import Input from "../shared/Input";
import Select, { SelectOptions } from "../shared/Select";

const MovimientosForm = () => {
  const schema = z.object({
    date: z
      .string()
      .nonempty({ message: "Debe ingresar una fecha" })
      .transform((str) => new Date(str)),
    amount: z
      .number({ required_error: "Debe ingresar un monto!" })
      .min(0, { message: "El valor debe ser igual o mayor a 0!" }),
  });

  const { form, errors } = createForm({
    onSubmit: (values) => {
      console.log(values);
    },
    extend: [validator({ schema })],
  });

  const cuentaOptions: SelectOptions[] = [
    { id: 1, label: "Caja local Mendoza" },
    { id: 2, label: "Caja local San Lorenzo" },
    { id: 2, label: "C/A ICBC" },
    { id: 2, label: "C/C ICBC" },
  ];

  const movimientoOptions: SelectOptions[] = [
    { id: 1, label: "Ingreso" },
    { id: 2, label: "Egreso" },
  ];

  const currencyOptions: SelectOptions[] = [
    { id: 1, label: "ARS - Pesos argentinos" },
    { id: 2, label: "USD - Dólares estadounidenses" },
    { id: 3, label: "EUR - Euros" },
  ];

  return (
    <div class="flex flex-1 flex-col rounded shadow bg-gray-100 h-fit min-w-[320px]">
      <div class="flex items-center justify-center rounded-t text-white bg-teal-500 h-11">
        <span>Crear nuevo movimiento</span>
      </div>
      <form ref={form} class="flex flex-col gap-1 p-2">
        <Input name="date" type="date" label="Fecha" errors={errors().date} />
        <Select name="account" label="Cuenta" options={cuentaOptions} />
        <Input
          name="amount"
          type="number"
          label="Monto"
          placeholder="Ingrese el monto"
          errors={errors().amount}
        />
        <Select
          name="movementType"
          label="Tipo de movimiento"
          options={movimientoOptions}
        />
        <Select name="currency" label="Moneda" options={currencyOptions} />
        <Input
          name="description"
          placeholder="Ingrese una descripción"
          type="text"
          label="Descripción"
        />
        <button
          type="submit"
          class="text-white bg-blue-400 dark:bg-blue-700
							outline-none p-1 mt-2 rounded font-semibold select-none shadow transition-all
							active:scale-[.99] active:bg-blue-500 dark:active:bg-blue-800"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default MovimientosForm;
