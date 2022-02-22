import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import talkie from "../assets/Talkie.png";
import rabbit from "../assets/Rabbit.png";
import shield from "../assets/Shield.png";
import toast from "react-simple-toasts";
import styles from "../styles/Home.module.css";

export default function Home() {
  let nameObjects = [
    {
      one: "Matt Johnson",
      two: "Bart Paden",
      three: "Ryan Doss",
      four: "Jared Malcolm",
    },
    {
      one: "Matt Johnson",
      two: "Bart Paden",
      three: "Jordan Heigle",
      four: "Tyler Viles",
    },
  ];

  const [puzzleRes, setPuzzleRes] = useState([]);
  const showPuzzleResults = () => {
    let distinctNames = [];
    Object.keys(nameObjects[0]).forEach((key) => {
      if (nameObjects[0][key] == nameObjects[1][key]) {
        distinctNames.push(nameObjects[0][key]);
      }

      if (nameObjects[0][key] != nameObjects[1][key]) {
        distinctNames.push(nameObjects[0][key]);
        distinctNames.push(nameObjects[1][key]);
      }
    });

    puzzleRes.length > 0
      ? toast("Results are already displayed!")
      : setPuzzleRes(distinctNames);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MIDWESTERN - Home</title>
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.infoBox}>
          <div className={styles.boxImg}>
            <Image src={talkie} alt="walkie-talkie" />
          </div>
          <h2>Heading Two</h2>
          <p>
            Integer accumsan moleste nisl, id faucibus urna accumsan quis. Proin
            vulputate, mauris semper maximus.
          </p>
          <button className="btn rounded-0">Learn more</button>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.boxImg}>
            <Image src={rabbit} alt="walkie-talkie" />
          </div>
          <h2>Heading Two</h2>
          <p>
            Integer accumsan moleste nisl, id faucibus urna accumsan quis. Proin
            vulputate, mauris semper maximus.
          </p>
          <button className="btn rounded-0">Learn more</button>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.boxImg}>
            <Image src={shield} alt="walkie-talkie" />
          </div>
          <h2>Heading Two</h2>
          <p>
            Integer accumsan moleste nisl, id faucibus urna accumsan quis. Proin
            vulputate, mauris semper maximus.
          </p>
          <button className="btn rounded-0">Learn more</button>
        </div>
      </main>

      <footer className={styles.footerRow}>
        <h1>
          <span className={styles.h1UnderLine}>Heading</span> One
        </h1>
        <p>
          Remove the duplicate in 2 javascript objects (found in readme), add
          the results to an array and output the list of distinct names in an
          unordered list below this paragraph when{" "}
          <Link href="" className={styles.link}>
            <a onClick={() => showPuzzleResults()}>this link</a>
          </Link>{" "}
          is clicked. If the operation has been completed already, notify the
          user that this has already been done.
        </p>

        <ul>
          {puzzleRes.length > 0
            ? puzzleRes.map((name, i) => <li key={i}>{name}</li>)
            : ""}
        </ul>
      </footer>
    </div>
  );
}
