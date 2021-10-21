import Footer from "./footer";
import React from "react";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
