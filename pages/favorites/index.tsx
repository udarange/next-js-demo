import Head from 'next/head'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardData } from "../index";
import styles from "../../styles/Favorites.module.css";

export default function Favorites() {
  const [data, setData] = useState<CardData[]>([])

  function toggleFavourite(id: number) {
    const requestBody = { isFavourite: false };

    axios.post(`http://localhost:3000/api/items/${id}`, requestBody)
    .then(response => {
      // console.log(response.data)
      setData(data.filter(el => el._id !== id))
    })
    .catch(error => {
      console.log(error);
    });

  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/items/favourites', {})
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
        <title>Favourite | Shop</title>
        <meta name="description" content="my favourite from shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {data.map((el, index) => <div className={styles.bucket} key={index}>
          <div>
            <p>{el.item.title}</p>
            <img className={styles.img} src={el.item.image} alt={"cover-image"} />
          </div>
          <button className={styles.btn} onClick={() => toggleFavourite(el._id)}>Remove from favorites</button>
        </div>)}
      </div>
    </div>
  )
}
