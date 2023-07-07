import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dan-ross-webdev/",
  },
  {
    name: "GitHub",
    link: "https://www.github.com/danross88",
  },
  {
    name: "Email",
    link: "mailto:danielmartinross@gmail.com",
  },
  {
    name: "Resume",
    link: "https://flowcv.com/resume/9th3fq6rpv",
  },
];

export default function Index() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        {socials.map((socials, index) => {
          return (
            <>
              <AnimatedText key={index}>
                <Link href={socials.link}>{socials.name}</Link>
              </AnimatedText>
            </>
          );
        })}
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Daniel Ross</p>
      </div>
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
        end: "top+=400px bottom",
      },
      opacity: 1,
      left: "400px",
      ease: "power3.Out",
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
