import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage"

export default function Home() {
  return (
   <>
      <Navbar/>
      <Homepage/>
   </>
  );
}
