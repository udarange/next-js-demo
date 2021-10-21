import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import Card from "./containers/Card";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noon Shop</title>
        <meta name="description" content="noon shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card/>
        <Card/>
        <Card/>
      </main>

      <footer className={styles.footer} style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#FC619C",
        color: "white",
        textAlign: "center"
      }}>
        <button style={{
          background: "transparent",
          border: "none",
          color: "white",
          width: "50%",
          textAlign: "center",
          minHeight: "50px"
        }}>
          <i style={{
            fontSize: "25px",
            padding: "18px"
          }} className="fa fa-home" aria-hidden="true"/>
        </button>
        <button style={{
          background: "transparent",
          border: "none",
          color: "white",
          width: "50%",
          textAlign: "center",
          minHeight: "50px"
        }}>
          <i style={{
            fontSize: "25px",
            padding: "18px"
          }} className="fa fa-heart" aria-hidden="true" />
        </button>
      </footer>
    </div>
  )
}

export default Home
