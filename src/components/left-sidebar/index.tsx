import { A } from "@solidjs/router";
import {
  TbAbacus,
  TbBell,
  TbCurrencyDollar,
  TbHome,
  TbMenu2,
  TbMessages,
} from "solid-icons/tb";
import { Show, createSignal } from "solid-js";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const size = 32;

  const sidebarItemClass =
    "flex items-center justify-start gap-2 w-full h-10 cursor-pointer py-0 px-1 text-gray-50 rounded-sm active:bg-teal-600 transition-all select-none";
  const activeClass = "bg-teal-700 shadow";

  return (
    <nav class="flex sm:flex-col items-start justify-between px-2 py-3 h-16 sm:h-screen bg-teal-400 shadow">
      <div>
        <div class={sidebarItemClass} onclick={() => setIsOpen(!isOpen())}>
          <TbMenu2 size={size} />
        </div>
      </div>
      <div class="flex gap-2 sm:flex-col">
        <A href="/" class={sidebarItemClass}>
          <TbHome size={size} />
          <Show when={isOpen()}>
            <span>Inicio</span>
          </Show>
        </A>
        <A
          href="/presupuestos"
          class={sidebarItemClass}
          activeClass={activeClass}
        >
          <TbCurrencyDollar size={size} />
          <Show when={isOpen()}>
            <span>Presupuestos</span>
          </Show>
        </A>
        <A
          href="/contabilidad"
          class={sidebarItemClass}
          activeClass={activeClass}
        >
          <TbAbacus size={size} />
          <Show when={isOpen()}>
            <span>Contabilidad</span>
          </Show>
        </A>
      </div>
      <div class="flex gap-2 sm:flex-col">
        <div class={sidebarItemClass}>
          <TbBell size={size} />
          <Show when={isOpen()}>
            <span>Notificaciones</span>
          </Show>
        </div>
        <div class={sidebarItemClass}>
          <TbMessages size={size} />
          <Show when={isOpen()}>
            <span>Mensajes</span>
          </Show>
        </div>
      </div>
    </nav>
  );
};

export default LeftSidebar;
