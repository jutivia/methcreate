<<<<<<< HEAD
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

    export default function Home() {
      return (
        <div className='bg-[#060606] '>
        <Navbar/>
        <Footer/>
        </div>
      )
    }
=======
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
>>>>>>> d649ac7d4de327aa65c4758a25d681f00d8b551d
