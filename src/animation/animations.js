import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const homeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  tl.from(".hero", {
    filter: "grayscale(1)",
    duration: 0.9,
  });

  tl.from(
    ".title h1",
    {
      x: "-100%",
      duration: 1.5,
    },
    "-=1",
  );
  tl.from(
    ".title h1",
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1",
  );

  tl.from(
    ".title h3 ",
    {
      x: "100%",
      duration: 2,
    },
    "-=2",
  );
  tl.from(
    ".title h3",
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1",
  );

  tl.from(
    ".title p",
    {
      y: "-100%",
      duration: 1.5,
    },
    "-=1.5",
  );
  tl.from(
    ".title p",
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1",
  );

  tl.from(
    ".cta .about",
    {
      x: "-100%",
      duration: 1.5,
    },
    "-=1.5",
  );
  tl.from(
    ".cta .about",
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1",
  );

  tl.from(
    ".cta .gallery",
    {
      x: "100%",
      duration: 1.5,
    },
    "-=2",
  );
  tl.from(
    ".cta .gallery",
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1.5",
  );
};
