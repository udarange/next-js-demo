import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return <header className={styles.header}>
    <Link href={"/"}>
      <button>
        Home
      </button>
    </Link>
    <Link href={"/favorites"}>
      <button>
        Liked
      </button>
    </Link>
  </header>
}
