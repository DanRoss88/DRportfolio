import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const phrases = [
  "Hello, I'm Dan.",
  "As a Full-Stack Web Developer with a unique background in Culinary Arts, I bring a valuable set of skills to the table.",
  "My experience has taught me the importance of effecient problem-solving, timely execution, and thriving under high-pressure environments.",
  "These skills have served me well in my current role as a Web Developer, where I consistenly deliver quality results while meeting tight deadlines.",
  "I am always eager to take on new challenges and continue growing as a developer.",
  "I would love to connect and explore how I can contribute to your team!",
];

export default function Index() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=400px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out",
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
