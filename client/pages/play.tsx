import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";
import { SoundCloudWidget } from "../components/SoundCloudWidget";
import { Button, Dialog, Drawer } from "@mui/material";

const Play: NextPage = () => {
  const [musicPlayer, setMusicPlayer] = useState(false);
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
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Unity
            style={{ width: "90vw", height: "100vh" }}
            unityProvider={unityProvider}
          />
          <Button
            style={{ width: "10vh", alignSelf: "flex-end", marginBottom: 40 }}
            onClick={() => setMusicPlayer(true)}
          >
            Music
          </Button>
        </div>
        <Drawer
          anchor={"bottom"}
          open={musicPlayer}
          onClose={() => setMusicPlayer(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <SoundCloudWidget />
        </Drawer>
      </div>
    </div>
  );
};

export default Play;