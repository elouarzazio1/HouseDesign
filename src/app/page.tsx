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
    <div className="flex max-w-6xl mx-auto flex-col  py-2 min-h-screen ">
     
      <main className="flex flex-1 w-full flex-col  items-center text-center px-4 sm:mt-10 mt-10">
          <Hero/>
       
       
          <Hero2/>
          <Section1/>
       
      </main>
    </div>
  );
}
