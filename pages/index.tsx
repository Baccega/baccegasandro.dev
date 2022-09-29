import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { animated, to, useSprings } from "react-spring";
import Card from "../components/Card";
import { cards } from "../content/cards";
import background from "../public/background.jpg";

const stacked_position = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: Math.random() * 8,
  delay: i * 100,
});
const up_position = (i: any) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const random_position = (i: any) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  rot: Math.random() * 90,
  scale: 1,
});
const trans = (r: number, s: any) =>
  `perspective(700px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Home: NextPage = () => {
  const [gone] = React.useState(() => new Set());
  const [props, set] = useSprings(cards.length, (i) => ({
    ...stacked_position(i),
    from: up_position(i),
  }));

  const handleFlick = (index: number) => () => {
    if (gone.size < cards.length) {
      gone.add(index);
      set((i) => {
        if (index !== i) return;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const x = (300 + window.innerWidth) * direction;
        const scale = 1.1;
        return {
          x,
          scale,
          rot: 100 * direction,
          delay: undefined,
          config: { friction: 50, tension: 200 },
        };
      });
      if (gone.size === cards.length) {
        setTimeout(() => {
          set((i) => random_position(i));
        }, 1000);
        setTimeout(() => {
          set((i) => up_position(i));
        }, 2000);
        setTimeout(() => {
          gone.clear();
          set((i) => stacked_position(i));
        }, 2500);
      }
    }
  };

  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <Head>
        <title>Baccega Sandro</title>
        <meta name="description" content="Baccega Sandro Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>WIP</h1>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
        >
          <animated.div
            onClick={handleFlick(i)}
            style={{
              transform: to([rot, scale], trans),
            }}
          >
            <Card card={cards[i]} />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default Home;