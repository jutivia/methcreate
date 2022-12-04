import { Landing } from "../components";
import RootLayout from "../components/Dashboard/RootLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StreamCards from "../components/StreamCard";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Landing />
      <Footer />
      {/* <RootLayout>
        <StreamCards />
      </RootLayout> */}
    </div>
  );
}
