import { For, createEffect } from "solid-js";
import { A, Route, Routes, useLocation } from "solid-start";

export interface Subroute {
  href: string;
  label: string;
}

const Header = () => {
  const location = useLocation();

  createEffect(() => {
    console.log(location.pathname);
  });

  return (
    <Routes>
      <Route
        path="/contabilidad/*"
        element={<GenericHeader subroutes={contabilidadSubroutes} />}
      />
      <Route
        path="/presupuestos/*"
        element={<GenericHeader subroutes={presupuestosSubroutes} />}
      />
    </Routes>
  );
};

export interface HeaderProps {
  subroutes: Subroute[];
}

const GenericHeader = ({ subroutes }: HeaderProps) => {
  return (
    <div class="flex w-full bg-blue-400">
      <For each={subroutes}>
        {(subroute) => (
          <A href={subroute.href} class="px-2 py-1" activeClass="bg-blue-300">
            <h2>{subroute.label}</h2>
          </A>
        )}
      </For>
    </div>
  );
};

const presupuestosSubroutes: Subroute[] = [
  { href: "clientes", label: "Clientes" },
  { href: "productos", label: "Productos" },
  { href: "operativos", label: "Operativos" },
];

const contabilidadSubroutes: Subroute[] = [
  { href: "movimientos", label: "Movimientos" },
  { href: "cuentas", label: "Cuentas" },
];

export default Header;
