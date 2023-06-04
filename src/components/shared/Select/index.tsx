import { For, Index, JSX, Show } from "solid-js";

export interface SelectProps {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  options: SelectOptions[];
  required?: boolean;
  multiple?: boolean;
  leading?: JSX.Element;
  leadingCallback?: () => unknown;
  trailing?: JSX.Element;
  trailingCallback?: () => unknown;
  errors?: string[];
  class?: string;
}

export interface SelectOptions {
  id: number;
  label: string;
  [key: string]: any;
}

const Select = (props: SelectProps) => {
  return (
    <div class={`flex flex-col gap-0.5 ${props.class}`}>
      <span class="text-gray-800 dark:text-white font-medium">
        {props.label}
      </span>
      <div class="relative transition-all duration-100">
        <select
          class={`
					w-full py-1 px-2 rounded outline-none ring-1 transition-all
					focus:ring-2 focus:ring-blue-200 focus:shadow
					 dark:focus:ring-blue-800 focus:text-black
					${!props.leading || "ps-8"} ${props.trailing && "pe-8"}
					${
            props.errors
              ? "ring-red-600 text-red-600"
              : "ring-blue-100 dark:ring-blue-700 text-black"
          }
					`}
          name={props.name}
        >
          <Show when={props.defaultValue}>
            <option value="null" disabled selected>
              {props.defaultValue}
            </option>
          </Show>
          <For each={props.options}>
            {(option) => <option value={option.id}>{option.label}</option>}
          </For>
        </select>
        <div
          onclick={props.leadingCallback}
          class={`absolute left-2 top-2 text-gray-900`}
        >
          {props.leading}
        </div>
        <div
          onclick={props.trailingCallback}
          class={`absolute right-2 top-2 text-gray-900`}
        >
          {props.trailing}
        </div>
        <Index each={props.errors}>
          {(error) => <span class="text-sm text-red-600">{error}</span>}
        </Index>
      </div>
    </div>
  );
};

export default Select;
