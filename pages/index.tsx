import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Card from "../components/card";
import axios from "axios";

export interface CardData {
  user: {
    pic: string,
    name: string,
  },
  item: {
    image: string,
    title: string,
    description: string,
    isFavourite: boolean,
    likes: number,
    price: number,
    comments: number,
    tags: string[]
  }
}

const Home: NextPage = () => {
  const [data, setData] = useState<CardData[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/items', {})
      .then(response => {
        // @ts-ignore
        setData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Noon Shop</title>
        <meta name="description" content="noon shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {data.map((el, index) => <Card key={index} cardData={el} />)}
      </main>
    </div>
  )
}

export default Home
