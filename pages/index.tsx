import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";
import { SoundCloudWidget } from "../components/SoundCloudWidget";
import { Button } from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
  // const [playMusic, setPlayMusic] = useState(false);

  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "assets/the-greg-and-larry-show-webgl.loader.js",
    dataUrl: "assets/the-greg-and-larry-show-webgl.data",
    frameworkUrl: "assets/the-greg-and-larry-show-webgl.framework.js",
    codeUrl: "assets/the-greg-and-larry-show-webgl.wasm",
  });

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Greg and Larry Show</title>
        <meta name="description" content="Generated by Logan Thomas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>{playMusic && <SoundCloudWidget />}</div> */}
      <Link href="/play">
        <Button>Play Game</Button>
      </Link>
    </div>
  );
};

export default Home;