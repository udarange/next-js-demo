import styles from "../styles/Footer.module.css";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return <footer className={styles.footer}>
    <Link href={"/"}>
      <button>
        <i className="fa fa-home" aria-hidden="true" />
      </button>
    </Link>
    <Link href={"/favorites"}>
      <button>
        <i className="fa fa-heart" aria-hidden="true" />
      </button>
    </Link>
  </footer>
}
