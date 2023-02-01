import { A } from "@solidjs/router";
import {
  TbAbacus,
  TbBell,
  TbCurrencyDollar,
  TbHome,
  TbMenu2,
  TbMessages,
} from "solid-icons/tb";
import { createSignal, Show } from "solid-js";
import styles from "./left-sidebar.module.scss";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const size = 32;

  return (
    <nav class={styles.sidebarContainer}>
      <div class={styles.topSection}>
        <div class={styles.sidebarItem} onclick={() => setIsOpen(!isOpen())}>
          <TbMenu2 size={size} />
        </div>
      </div>
      <div class={styles.midSection}>
        <A href="/" class={styles.sidebarItem}>
          <TbHome size={size} />
          <Show when={isOpen()}>
            <span>Inicio</span>
          </Show>
        </A>
        <A
          href="/presupuestos"
          class={styles.sidebarItem}
          activeClass={styles.activeLink}
        >
          <TbCurrencyDollar size={size} />
          <Show when={isOpen()}>
            <span>Presupuestos</span>
          </Show>
        </A>
        <A
          href="/contabilidad"
          class={styles.sidebarItem}
          activeClass={styles.activeLink}
        >
          <TbAbacus size={size} />
          <Show when={isOpen()}>
            <span>Contabilidad</span>
          </Show>
        </A>
      </div>
      <div class={styles.bottomSection}>
        <div class={styles.sidebarItem}>
          <TbBell size={size} />
          <Show when={isOpen()}>
            <span>Notificaciones</span>
          </Show>
        </div>
        <div class={styles.sidebarItem}>
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
