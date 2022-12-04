import Head from "next/head";
import Image from "next/image";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import RootLayout from "../components/Dashboard/RootLayout";
import StreamCards from "../components/StreamCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[#060606] ">
      {/* <Navbar />
      <Footer /> */}
      <RootLayout>
        <StreamCards />
      </RootLayout>
    </div>
  );
}
