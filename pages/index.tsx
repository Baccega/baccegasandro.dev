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
import Packet from "../components/Packet";

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function wait(time: number) {
  return new Promise<number>((resolve) => {
    setTimeout(resolve, time);
  });
}

const CARD_BOXSHADOW_TRANSPARENCY = 0.4;
const PACKET_FULL_CLIPPATH = [0, 0, 100, 0, 100, 100, 0, 100];

const showcase_position = (i: number) => ({
  x: 0,
  y: 0,
  scale: 1.1,
  rot: 0,
  clipPath: PACKET_FULL_CLIPPATH,
  dropShadow: [-40, 30, 10, 0.4]
});
const clip = (i: number) => ({
  // polygon(0 5%, 100% 3%, 100% 100%, 0% 100%);,
  clipPath: [0, 5, 100, 3, 100, 100, 0, 100],
  config: config.stiff
});
const stacked_position = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: Math.random() * 5,
  delay: i * 100,
  clipPath: PACKET_FULL_CLIPPATH,
  boxShadow: CARD_BOXSHADOW_TRANSPARENCY,
  // drop-shadow(-15px 8px 8px rgba(0, 0, 0, 0.5))
  dropShadow: [-15, 8, 8, 0.4]
  // dropShadow: [-40, 30, 10, 0.5]
});
const up_position = (i: any) => ({
  x: 0,
  rot: 0,
  scale: 1,
  y: -1000,
  clipPath: PACKET_FULL_CLIPPATH,
  boxShadow: 0,
});
const above_position = (i: any) => ({
  x: 0,
  rot: 0,
  scale: 1.5,
  y: -1000,
  clipPath: PACKET_FULL_CLIPPATH,
  boxShadow: 0,
  dropShadow: [0, 0, 0, 0.0]
});
const random_position = (i: any) => ({
  x: randomIntFromInterval(-200, 200),
  y: randomIntFromInterval(-200, 200),
  rot: randomIntFromInterval(-100, 100),
  scale: 1,
  clipPath: PACKET_FULL_CLIPPATH,
  boxShadow: 0,
});
const trans = (r: number, s: any) =>
  `rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s}) translate3d(0px, -30px, 0px)`;

const Home: NextPage = () => {
  const packets = [cards[0]];
  const [cardsPosition, setCardsPosition] = React.useState(cards.length - 1);
  const [packetSelected, setPacketSelected] = React.useState(-1);

  const [cardsSprings, cardsApi] = useSprings(cards.length, (i) => ({
    ...above_position(i),
  }));
  const [packetsSprings, packetsApi] = useSprings(1, (i) => ({
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
        await wait(500);
        await cardsApi.start((i) => random_position(i));
        await wait(1000);
        await cardsApi.start((i) => above_position(i));
        await wait(1000);
        setCardsPosition(cards.length - 1);
        setPacketSelected(-1);
        await packetsApi.start((i) => stacked_position(i));
      }
    }
  };

  const handlePacketClick = async (index: number) => {
    await packetsApi.start((i) => showcase_position(i));
    await wait(500);
    await packetsApi.start((i) => clip(i));
    cardsApi.set({ x: 0, y: 0, scale: 1, boxShadow: 0 });
    await wait(1500);
    await cardsApi.start((i) => up_position(i));
    await wait(1000);
    await packetsApi.start((i) => above_position(i));
    await wait(500);
    setPacketSelected(index);
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

      {packetsSprings.map(({ x, y, rot, scale, clipPath, dropShadow }, i) => (
        <animated.div
          key={i}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
            zIndex: 1000,
            filter: to(
              [dropShadow],
              (dropShadow) =>
                `drop-shadow(${dropShadow[0]}px ${dropShadow[1]}px ${dropShadow[2]}px rgba(0, 0, 0, ${dropShadow[3]}))`
            ) 
          }}
        >
          <animated.div
            className={styles.animatedPacket}
            style={{
              clipPath: to(
                [clipPath],
                (clipPath) =>
                  `polygon(${clipPath[0]}% ${clipPath[1]}%, ${clipPath[2]}% ${clipPath[3]}%, ${clipPath[4]}% ${clipPath[5]}%, ${clipPath[6]}% ${clipPath[7]}%)`
              ),
              transform: to([rot, scale], trans),
            }}
          >
            <Packet packet={packets[i]} onClick={() => handlePacketClick(i)} />
          </animated.div>
        </animated.div>
      ))}
      {cardsSprings.map(({ x, y, rot, scale, boxShadow }, i) => (
        <animated.div
          key={i}
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
      {packetSelected !== -1 ? (
        <div className={buttonStyles.container}>
          <Button3D
            disabled={cardsPosition < 0}
            icon={cardsPosition < 0 ? <GiSandsOfTime /> : <MdArrowForward />}
            text={cardsPosition < 0 ? "Reshuffling" : "Next card"}
            onClick={handleNextCard(cardsPosition)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
