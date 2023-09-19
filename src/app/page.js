//1. Import
//import Image from 'next/image'
//import styles from './page.module.css'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";


//2. Function defination Area
function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

//3. Export Area
export default Home;