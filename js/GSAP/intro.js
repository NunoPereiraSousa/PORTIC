import gsap from "gsap";

// gsap.registerPlugin(CSSRulePlugin);

export function animate() {
  //   let rule = CSSRulePlugin.getRule("h1::after");
  let timeline = gsap.timeline();

  timeline
    .to(".intro_div", {
      y: "15%",
      delay: 0.3,
      stagger: 0.15,
      duration: 0.8
    })
    .to(".intro_line", {
      width: "50px",
      duration: 0.65
    })
    .to(
      ".intro_div2",
      {
        y: "18%",
        stagger: 0.25,
        duration: 0.65
      },
      "-=0.4"
    )
    .to(
      ".intro_div3",
      {
        y: "18%",
        stagger: 0.25,
        duration: 1
      },
      "-=1.5"
    )
    .to(
      ".carousel_line",
      {
        y: "15%",
        duration: 0.65
      },
      "-=1"
    )
    .to(
      ".intro_div",
      {
        textShadow: "5px 5px 4px rgba(0, 0, 0, 0.3)",
        duration: 0.5
      },
      "-=1"
    )
    .to(
      ".intro_line",
      {
        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.3)",
        duration: 0.5
      },
      "-=0.5"
    )
    .to([".intro_div2", ".intro_div3"], {
      textShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
      duration: 0.5
    });
}
