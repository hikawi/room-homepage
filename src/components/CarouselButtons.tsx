import { useStore } from "@nanostores/solid";
import { onCleanup, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { $picture, cycleBackward, cycleForward } from "../stores/picture";

export default function CarouselButtons() {
  const picture = useStore($picture);

  function keyboardHandler(event: KeyboardEvent) {
    if (event.key === "ArrowLeft" && picture() !== 0) {
      cycleBackward();
    } else if (event.key === "ArrowRight" && picture() !== 2) {
      cycleForward();
    }
  }

  onMount(() => {
    if (isServer) return;
    window.addEventListener("keydown", keyboardHandler);
  });

  onCleanup(() => {
    if (isServer) return;
    window.removeEventListener("keydown", keyboardHandler);
  });

  return (
    <>
      <div class="col-start-1 row-start-1 flex h-14 w-[7rem] shrink-0 flex-row place-self-end bg-black lg:col-start-5 lg:w-full lg:place-self-start lg:self-end xl:h-20">
        <button
          class="flex w-full items-center justify-center enabled:hover:bg-very-dark-gray disabled:cursor-not-allowed disabled:opacity-50"
          disabled={picture() === 0}
          onClick={() => cycleBackward()}
          aria-label="Previous picture"
        >
          {/* Left arrow */}
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>

        <button
          class="flex w-full items-center justify-center enabled:hover:bg-very-dark-gray disabled:cursor-not-allowed disabled:opacity-50"
          disabled={picture() === 2}
          onClick={() => cycleForward()}
          aria-label="Next picture"
        >
          {/* Right arrow */}
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
