"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from '../components/Intro/index';
import Description from '../components/Description/index';
import Projects from '../components/Projects/index';
import Footer from '../components/Footer/index';

export default function Home() {
  useEffect(() => {
    (
      async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description /> 
        <Projects /> 
        <Footer />
    </main>
  );
}
