import { createForm } from "@felte/solid";
import { Show } from "solid-js";
import styles from "./cuentas-form.module.scss";

interface CuentasErrors {
  name?: string;
  description?: string;
}

const CuentasForm = () => {
  const { form, errors, reset } = createForm({
    onSubmit: (values, context) => {
      console.log(values);
    },
    onError: (errors) => errors,
    validate: (values) => {
      const errors: CuentasErrors = {};
      if (!values.name) {
        errors.name = "El nombre de cuenta es requerido!";
      }
      if (values.name && values.name.length < 3) {
        errors.name = "Debe tener al menos 3 caracteres";
      }
      if (!values.description) {
        errors.description = "La descripción es requerida!";
      }
      if (values.description && values.description.length < 10) {
        errors.description = "Debe tener al menos 10 caracteres!";
      }
      return errors;
    },
  });
  return (
    <div class={styles.formContainer}>
      <div class={styles.formHeader}>Crear nueva cuenta</div>
      <form ref={form}>
        <div>
          <label>
            Nombre
            <Show when={errors().name}>
              <span class={styles.error}>({errors().name})</span>
            </Show>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Ingrese un nombre de cuenta"
          />
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

export default CuentasForm;
