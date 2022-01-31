import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TEST);
  return (
    <div className={styles.container}>
      <Head>
        <title>Docker</title>
        <meta name="Docker" content="Docker V1" />
        <link rel="icon" href="/docker.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I am Apoorv Sharma</h1>
        <p className={styles.description}>@ritikrishu=@strongestavenger</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
}
