import { useStore } from "@nanostores/solid";
import { Portal, Show } from "solid-js/web";
import { $menuOpen } from "../stores/menuOpen";

export default function MenuDropdown() {
  const menuOpen = useStore($menuOpen);

  return (
    <Show when={menuOpen()}>
      <Portal>
        <div class="fixed inset-0 h-full w-full bg-black bg-opacity-50 xl:hidden">
          <div class="z-0 flex h-[6.875rem] w-full flex-row items-center justify-end gap-4 bg-white p-6 text-base font-medium tracking-tighter xs:gap-8">
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
