import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import buttonStyles from "../styles/Button3D.module.scss";
import { animated, to, useSprings, config } from "react-spring";
import Card from "../components/Card";
import { cards } from "../content/cards";
import background from "../public/background.jpg";
import Button3D from "../components/Button3D";
import { MdArrowForward } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import Image from "next/image";

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const stacked_position = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: Math.random() * 5,
  delay: i * 100,
});
const up_position = (i: any) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const random_position = (i: any) => ({
  x: randomIntFromInterval(-200, 200),
  y: randomIntFromInterval(-200, 200),
  rot: randomIntFromInterval(-100, 100),
  scale: 1,
});
const trans = (r: number, s: any) =>
  `rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s}) translate3d(0px, -30px, 0px)`;

const Home: NextPage = () => {
  const [position, setPosition] = React.useState(cards.length - 1);
  const [props, api] = useSprings(cards.length, (i) => ({
    ...stacked_position(i),
    from: up_position(i),
  }));

  const handleClick = (index: number) => (e: any) => {
    if (index >= 0) {
      setPosition(index - 1);
      api.start((i) => {
        if (index !== i) return;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const x = (300 + window.innerWidth) * direction;
        const y = randomIntFromInterval(
          -window.innerHeight,
          window.innerHeight
        );
        const scale = 1.1;
        return {
          x,
          y,
          scale,
          rot: 200 * direction,
          delay: undefined,
          config: config.slow,
        };
      });
      if (index === 0) {
        setTimeout(() => {
          api.start((i) => random_position(i));
        }, 500);
        setTimeout(() => {
          api.start((i) => up_position(i));
        }, 1500);
        setTimeout(() => {
          setPosition(cards.length - 1);
          api.start((i) => stacked_position(i));
        }, 2000);
      }
    }
  };

  return (
    <div className={styles.root}>
      <Image
        src={background}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority={false}
        alt="Background"
      />
      <Head>
        <title>Baccega Sandro</title>
        <meta name="description" content="Baccega Sandro - Online Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
        >
          <animated.div
            style={{
              transform: to([rot, scale], trans),
            }}
          >
            <Card card={cards[i]} />
          </animated.div>
        </animated.div>
      ))}
      <div className={buttonStyles.container}>
        <Button3D
          disabled={position < 0}
          icon={position < 0 ? <GiSandsOfTime /> : <MdArrowForward />}
          text={position < 0 ? "Reshuffling" : "Next card"}
          onClick={handleClick(position)}
        />
      </div>
    </div>
  );
};

export default Home;
