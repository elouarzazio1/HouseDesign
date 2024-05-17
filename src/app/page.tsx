import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/header";
import SquigglyLines from "../components/SquigglyLines";

import Section1 from "@/components/Section1";

import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";

export default function HomePage() {
  return (
    <div className=" bg-black text-white ">
     
      <main className="">
          <Hero/>
          <Hero2/>
          <Section1/>
       
      </main>
    </div>
  );
}
