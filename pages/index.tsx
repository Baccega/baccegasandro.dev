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
import Pack from "../components/Pack";
import aboutMeDeck from "../content/about-me";

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function wait(time: number) {
  return new Promise<number>((resolve) => {
    setTimeout(resolve, time);
  });
}

const CARD_BOXSHADOW_TRANSPARENCY = 0.4;
const PACK_FULL_CLIPPATH = [0, 0, 100, 0, 100, 100, 0, 100];

const showcase_position = (i: number) => ({
  x: 0,
  y: 30,
  scale: 1.1,
  rot: 0,
  clipPath: PACK_FULL_CLIPPATH,
  dropShadow: [-40, 40, 10, 0.5],
});
const clip = (i: number) => ({
  clipPath: [0, 7, 100, 8, 100, 100, 0, 100],
  config: config.stiff,
});
const stacked_position = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: Math.random() * 5,
  delay: i * 100,
  clipPath: PACK_FULL_CLIPPATH,
  boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
  dropShadow: [-20, 20, 10, 0.6],
});
const up_position = (i: any) => ({
  x: 0,
  rot: 0,
  scale: 1,
  y: -1000,
  clipPath: PACK_FULL_CLIPPATH,
  boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
});
const above_position = (i: any) => ({
  x: 0,
  rot: 0,
  scale: 1.5,
  y: -1000,
  clipPath: PACK_FULL_CLIPPATH,
  boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
  dropShadow: [0, 0, 0, 0.0],
});
const random_position = (i: any) => ({
  x: randomIntFromInterval(-200, 200),
  y: randomIntFromInterval(-200, 200),
  rot: randomIntFromInterval(-100, 100),
  boxShadow: 0,
  scale: 1,
});

const trans = (r: number, s: any) =>
  `rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s}) translate3d(0px, -30px, 0px)`;

const Home: NextPage = () => {
  const packs = [aboutMeDeck];


  const [packSelected, setPackSelected] = React.useState(-1);
  const [cardsPosition, setCardsPosition] = React.useState(cards.length - 1);

  const [cardsSprings, cardsApi] = useSprings(cards.length, (i) => ({
    ...above_position(i),
  }));
  const [packsSprings, packsApi] = useSprings(1, (i) => ({
    ...stacked_position(i),
    from: above_position(i),
  }));

  const handleNextCard = (index: number) => async (e: any) => {
    if (index >= 0) {
      setCardsPosition(index - 1);
      cardsApi.start((i) => {
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
          boxShadow: 0,
        };
      });
      if (index === 0) {
        await wait(1000);
        await cardsApi.start((i) => random_position(i));
        await wait(1000);
        await cardsApi.start((i) => above_position(i));
        await wait(1000);
        setCardsPosition(cards.length - 1);
        setPackSelected(-1);
        await packsApi.start((i) => stacked_position(i));
      }
    }
  };

  const handlePackClick = async (index: number) => {
    await packsApi.start((i) => showcase_position(i));
    await wait(1000);
    await packsApi.start((i) => clip(i));
    cardsApi.set({ x: 0, y: 0, scale: 1, boxShadow: 0 });
    await wait(1500);
    await cardsApi.start((i) => up_position(i));
    await wait(1000);
    await packsApi.start((i) => above_position(i));
    await wait(500);
    setPackSelected(index);
    await cardsApi.start((i) => stacked_position(i));
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

      {packsSprings.map(({ x, y, rot, scale, clipPath, dropShadow }, i) => (
        <animated.div
          key={i}
          className={styles.animatedPackContainer}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
            filter: to(
              [dropShadow],
              (dropShadow) =>
                `drop-shadow(${dropShadow[0]}px ${dropShadow[1]}px ${dropShadow[2]}px rgba(0, 0, 0, ${dropShadow[3]}))`
            ),
          }}
        >
          <animated.div
            className={styles.animatedPack}
            style={{
              clipPath: to(
                [clipPath],
                (clipPath) =>
                  `polygon(${clipPath[0]}% ${clipPath[1]}%, ${clipPath[2]}% ${clipPath[3]}%, ${clipPath[4]}% ${clipPath[5]}%, ${clipPath[6]}% ${clipPath[7]}%)`
              ),
              transform: to([rot, scale], trans),
            }}
          >
            <Pack pack={packs[i]} onClick={() => handlePackClick(i)} />
          </animated.div>
        </animated.div>
      ))}
      {cardsSprings.map(({ x, y, rot, scale, boxShadow }, i) => (
        <animated.div
          key={i}
          className={styles.animatedCardContainer}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
        >
          <animated.div
            className={styles.animatedCard}
            style={{
              transform: to([rot, scale], trans),
              boxShadow: to(
                [boxShadow],
                (boxShadow) =>
                  `-50px 50px 100px 15px rgba(0, 0, 0, ${boxShadow})`
              ),
            }}
          >
            <Card card={cards[i]} />
          </animated.div>
        </animated.div>
      ))}
      {packSelected !== -1 && cardsPosition >= 0 ? (
        <div className={buttonStyles.container}>
          <Button3D
            icon={<MdArrowForward />}
            text={"Next card"}
            disabled={false}
            onClick={handleNextCard(cardsPosition)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
