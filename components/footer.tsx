import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";

export default function Footer () {
  return <footer className={styles.footer} style={{
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#FC619C",
    color: "white",
    textAlign: "center"
  }}>
    <Link href={"/"}>
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
        }} className="fa fa-home" aria-hidden="true" />
      </button>
    </Link>
    <Link href={"/favorites"}>
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
    </Link>
  </footer>
}
