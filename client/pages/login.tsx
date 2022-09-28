import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Registration.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Greg and Larry Show - Login</title>
        <meta name="description" content="Generated by Logan Thomas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <Typography>Login</Typography>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12}>
            <TextField label="Email" />
          </Grid>
          <Grid item xs={12}>
            <TextField type="password" label="Password" />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Link href={`/play`}>
              <Button color="warning" variant="contained" fullWidth>
                Continue without saving
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href={`/registration`}>
              <Button variant="contained" color="secondary" fullWidth>
                Don&apos;t have an account? Register
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
