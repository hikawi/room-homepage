import { useStore } from "@nanostores/solid";
import { $picture } from "../stores/picture";

import desktopHero1 from "../assets/desktop-image-hero-1.jpg";
import desktopHero2 from "../assets/desktop-image-hero-2.jpg";
import desktopHero3 from "../assets/desktop-image-hero-3.jpg";
import mobileHero1 from "../assets/mobile-image-hero-1.jpg";
import mobileHero2 from "../assets/mobile-image-hero-2.jpg";
import mobileHero3 from "../assets/mobile-image-hero-3.jpg";

const mobileHero = [mobileHero1, mobileHero2, mobileHero3];
const desktopHero = [desktopHero1, desktopHero2, desktopHero3];

export default function PictureCarousel() {
  const picture = useStore($picture);

  // I actually have no clue why there needs to be duplicate col-start-1 and row-start-1. Or else everything dies.
  // I'm guessing it's because the picture is in a grid, and changing the grid display kinda messes with display areas.
  return (
    <picture class="col-start-1 row-start-1 size-full lg:col-span-4 lg:col-start-1 lg:row-start-1">
      <source srcset={mobileHero[picture()].src} media="(max-width: 1024px)" />
      <img
        src={desktopHero[picture()].src}
        alt="hero"
        class="size-full object-cover"
      />
    </picture>
  );
}
