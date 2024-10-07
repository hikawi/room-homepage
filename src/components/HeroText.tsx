import { useStore } from "@nanostores/solid";
import { $picture } from "../stores/picture";

export default function HeroText() {
  const picture = useStore($picture);

  const titles = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials",
  ];
  const subtitles = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  ];

  return (
    <div class="flex flex-col place-content-center gap-10 px-8 py-14 lg:col-span-3 lg:col-start-5 lg:row-start-1 lg:gap-6 xl:px-24 xl:py-28">
      <div class="flex flex-col gap-4 lg:gap-5">
        <h1 class="text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.1rem] lg:text-[3rem]">
          {titles[picture()]}
        </h1>
        <p class="font-medium leading-snug tracking-tight text-dark-gray">
          {subtitles[picture()]}
        </p>
      </div>

      <a
        href="#"
        class="group flex flex-row items-center gap-8 text-[15px] font-medium uppercase tracking-[0.78rem] hover:text-dark-gray focus:text-dark-gray"
      >
        Shop now
        <svg
          width="40"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          class="duration-200 group-hover:translate-x-2 group-focus:translate-x-2"
          aria-hidden="true"
        >
          <path
            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
            fill="#000"
            fill-rule="nonzero"
          ></path>
        </svg>
      </a>
    </div>
  );
}
