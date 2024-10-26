import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const heroAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  tl.from(".hero", {
    filter: "grayscale(1)",
    duration: 0.9,
  })
    .from(
      ".hero-title h1",
      {
        x: "-100%",
        duration: 1.5,
      },
      "-=1",
    )
    .from(
      ".hero-title h1",
      {
        opacity: 0,
        duration: 1.5,
      },
      "-=1",
    )
    .from(
      ".hero-title h3 ",
      {
        x: "100%",
        duration: 2,
      },
      "-=2",
    )
    .from(
      ".hero-title h3",
      {
        opacity: 0,
        duration: 1.5,
      },
      "-=1",
    )
    .from(
      ".hero-title p",
      {
        y: "-100%",
        duration: 1.5,
      },
      "-=1.5",
    )
    .from(
      ".hero-title p",
      {
        opacity: 0,
        duration: 1.5,
      },
      "-=1",
    )
    .from(
      ".cta-register",
      {
        x: "-100%",
        duration: 1.5,
      },
      "-=1.5",
    )
    .from(
      ".cta-register",
      {
        opacity: 0,
        duration: 1.5,
      },
      "-=1",
    )
    .from(
      ".cta-info",
      {
        x: "100%",
        duration: 1.5,
      },
      "-=2",
    )
    .from(
      ".cta-info",
      {
        opacity: 0,
        duration: 1.5,
      },
      "-=1.5",
    );
};

export const aboutSectAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.from(".about .small-title", { y: -50, opacity: 0, duration: 1.5 })
    .from(".about .big-title", { y: -50, opacity: 0, duration: 1.5 }, "-=1")
    .from(
      ".about-content .image",
      { x: -50, rotate: 20, opacity: 0, duration: 1.5 },
      "-=1",
    )
    .from(
      ".about-content p",
      { x: 50, rotate: -20, opacity: 0, duration: 1.5 },
      "-=1",
    )
    .from(
      ".about-content .about-link",
      { x: 50, rotate: -10, opacity: 0, duration: 1.5 },
      "-=0.2",
    );

  ScrollTrigger.create({
    animation: tl,
    trigger: ".about",
    pin: false,
    start: "-70px center",
    end: "bottom top",
    scrub: false,
    toggleActions: "play none none none",
    markers: false,
  });
};

export const gallerySectAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  const images = gsap.utils.toArray(
    ".gallery .gallery-content .image-container",
  );

  tl.from(".gallery .small-title", { y: -50, opacity: 0, duration: 1.5 })
    .from(".gallery .big-title", { y: -50, opacity: 0, duration: 1.5 }, "-=1")
    .from(
      images,
      {
        opacity: 0,
        duration: 2,
        stagger: {
          each: 0.1,
          from: "random",
          ease: "power1.inOut",
        },
      },
      "-=0.8",
    );

  ScrollTrigger.create({
    animation: tl,
    trigger: ".gallery",
    start: "top center",
    end: "bottom tom",
    markers: false,
  });
};
