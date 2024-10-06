import { atom } from "nanostores";

const $picture = atom<number>(0);

function cycleForward() {
  $picture.set(($picture.get() + 1) % 3);
}

function cycleBackward() {
  $picture.set(($picture.get() + 2) % 3);
}

export { $picture, cycleBackward, cycleForward };
