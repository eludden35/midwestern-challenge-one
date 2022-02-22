import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../assets/Logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(router);
  };
  return (
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="midwestern-logo" />
          </a>

          <span className="navbar-text gold">
            {router.pathname == "/contact" ? (
              <Link href="/">home</Link>
            ) : (
              <Link href="/contact">contact</Link>
            )}
          </span>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
