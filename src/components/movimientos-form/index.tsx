import { createForm } from "@felte/solid";
import { Show } from "solid-js";
import styles from "./movimientos-form.module.scss";

interface MovimientosErrors {
  date?: string;
  amount?: string;
  description?: string;
}

const MovimientosForm = () => {
  const { form, errors, reset } = createForm({
    onSubmit: (values, context) => {
      console.log(values);
    },
    onError: (errors) => errors,
    validate: (values) => {
      const errors: MovimientosErrors = {};
      if (!values.date) {
        errors.date = "La fecha es requerida!";
      }
      if (!values.amount) {
        errors.amount = "Debe tener un monto!";
      }
      if (values.amount < 0) {
        errors.amount = "El monto debe ser mayor o igual a 0!";
      }
      if (!values.description) {
        errors.description = "Debe tener una descripción!";
      }
      if (values.description && values.description.length < 10) {
        errors.description =
          "La descripción debe tener al menos 10 caracteres!";
      }
      return errors;
    },
  });

  return (
    <div class={styles.formContainer}>
      <div class={styles.formHeader}>Crear nuevo movimiento</div>
      <form ref={form}>
        <div>
          <label>
            Fecha
            <Show when={errors().date}>
              <span class={styles.error}>({errors().date})</span>
            </Show>
          </label>
          <input type="date" name="date" />
        </div>
        <div>
          <label>Cuenta</label>
          <select name="account">
            <option value="caja" selected>
              Caja
            </option>
            <option value="banco">Banco</option>
          </select>
        </div>
        <div>
          <label>
            Monto
            <Show when={errors().amount}>
              <span class={styles.error}>({errors().amount})</span>
            </Show>
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Ingrese el monto del movimiento"
          />
        </div>
        <div>
          <label>Tipo</label>
          <select name="movementType">
            <option value="input" selected>
              Ingreso
            </option>
            <option value="output">Egreso</option>
          </select>
        </div>
        <div>
          <label>
            Descripción
            <Show when={errors().description}>
              <span class={styles.error}>({errors().description})</span>
            </Show>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Ingrese una descripción del movimiento"
          />
        </div>
        <div>
          <label>Moneda</label>
          <select name="currency">
            <option value="ars" selected>
              ARS
            </option>
            <option value="usd">USD</option>
          </select>
        </div>
        <button type="submit">Guardar</button>
      </form>
      {/* <pre>{JSON.stringify(errors(), null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(touched(), null, 2)}</pre> */}
    </div>
  );
};

export default MovimientosForm;
