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

  return (
    <picture class="w-full">
      <source srcset={mobileHero[picture()].src} media="(max-width: 1280px)" />
      <img
        src={desktopHero[picture()].src}
        alt="hero"
        class="w-full object-cover xl:h-full xl:w-fit xl:object-contain"
      />
    </picture>
  );
}
