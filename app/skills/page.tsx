import React from "react";
import { Montserrat } from "next/font/google";
import { JSIcon } from "@/components/icons/JSIcon";
import { TSIcon } from "@/components/icons/TSIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { CodeCard } from "@/components/CodeCard";
import { skills } from "./data";

const montserratLight = Montserrat({
  weight: "300",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const montserratSemiBold = Montserrat({
  weight: "500",
  subsets: ["latin"],
});
const montserratBold = Montserrat({
  weight: "600",
  subsets: ["latin"],
});
const montserratExtraBold = Montserrat({
  weight: "800",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <main className={montserrat.className}>
      <div className="flex flex-col min-h-screen bg-altBG">
        <div
          className={` text-sm text-brightGrey lg:p-10 lg:m-40 bg-gradient-to-b from-hiBG to-blueGrey shadow-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 leading-relaxed ${montserratSemiBold.className}`}
        >
          {skills.map((skill, index) => (
            <CodeCard skillProp={skill} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
