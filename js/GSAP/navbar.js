import gsap from "gsap";

export function animate() {
  let timeline = gsap.timeline();

  timeline
    .to([".subheader_div", ".lang_line"], {
      y: "0%",
      stagger: 0.05,
      opacity: 1,
      delay: 0.6,
      duration: 0.6
    })
    .to(
      ".navbar__logo",
      {
        opacity: 1,
        duration: 0.6
      },
      "-=0.5"
    )
    .to(
      ".navbar_div",
      {
        y: "0%",
        stagger: 0.15,
        duration: 0.6
      },
      "-=0.5"
    );
}
