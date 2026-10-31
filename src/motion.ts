import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function startMotion(scope: HTMLElement) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return () => {};

  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  let lenis: Lenis | null = null;
  let ticker: ((time: number) => void) | null = null;

  if (fine) {
    lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
    });
    lenis.on("scroll", ScrollTrigger.update);
    ticker = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
  }

  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        },
      );
    });

    const banner = scope.querySelector<HTMLElement>(".banner-shift");
    if (fine && banner) {
      gsap.fromTo(
        banner,
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: ".banner",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        },
      );
    }
  }, scope);

  return () => {
    if (ticker) gsap.ticker.remove(ticker);
    lenis?.destroy();
    ctx.revert();
  };
}
