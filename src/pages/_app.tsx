// import '../styles/globals.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import IntroSection from "../components/intro-section/intro-section";
// import Script from "next/Script";
import "../../public/lib/bootstrap/css/bootstrap.min.css";
import "../../public/lib/font-awesome/css/font-awesome.min.css";
import "../../public/lib/animate/animate.min.css";
import "../../public/lib/ionicons/css/ionicons.min.css";
import "../../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../public/lib/lightbox/css/lightbox.min.css";
import "../../public/css/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nebula</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="deScription" content="" />

        {/* Favicons */}
        <link rel="icon" href="img/nebula.jpeg" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700"
          rel="stylesheet"
        />
      </Head>
      {/* <Script src="../../public/lib/jquery/jquery.min.js"></Script>
      <Script src="../../public/lib/jquery/jquery-migrate.min.js"></Script>
      <Script src="../../public/lib/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="../../public/lib/easing/easing.min.js"></Script>
      <Script src="../../public/lib/mobile-nav/mobile-nav.js"></Script>
      <Script src="../../public/lib/wow/wow.min.js"></Script>
      <Script src="../../public/lib/waypoints/waypoints.min.js"></Script>
      <Script src="../../public/lib/counterup/counterup.min.js"></Script>
      <Script src="../../public/lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="../../public/lib/isotope/isotope.pkgd.min.js"></Script>
      <Script src="../../public/lib/lightbox/js/lightbox.min.js"></Script>
      <Script src="contactform/contactform.js"></Script>
      <Script src="js/main.js"></Script> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
