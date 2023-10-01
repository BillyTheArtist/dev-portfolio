import React from "react";
import { Montserrat } from "next/font/google";
import { JSIcon } from "@/components/icons/JSIcon";
import { TSIcon } from "@/components/icons/TSIcon";
import { NextIcon } from "@/components/icons/NextIcon";
import { CodeCard } from "@/components/CodeCard";

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
          <CodeCard
            title="JavaScript"
            icon={<JSIcon className={`mr-3`} />}
            description="Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I'm committed to transforming complex concepts
            into user-friendly solutions. Let's collaborate on your next
            project and bring your vision to life."
          />
          <CodeCard
            title="TypeScript"
            icon={<TSIcon className={`mr-3`} />}
            description="Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I'm committed to transforming complex concepts
            into user-friendly solutions. Let's collaborate on your next
            project and bring your vision to life."
          />

          <CodeCard
            title="Nextjs"
            icon={<NextIcon className={`mr-3`} />}
            description="Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I'm committed to transforming complex concepts
            into user-friendly solutions. Let's collaborate on your next
            project and bring your vision to life."
          />
          <div className={` m-3 p-4 border-2 border-almostBlack rounded-md `}>
            Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I&apos;m committed to transforming complex concepts
            into user-friendly solutions. Let&apos;s collaborate on your next
            project and bring your vision to life.
          </div>
          <div className={` m-3 p-4 border-2 border-almostBlack rounded-md `}>
            Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I&apos;m committed to transforming complex concepts
            into user-friendly solutions. Let&apos;s collaborate on your next
            project and bring your vision to life.
          </div>
          <div className={` m-3 p-4 border-2 border-almostBlack rounded-md `}>
            Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I&apos;m committed to transforming complex concepts
            into user-friendly solutions. Let&apos;s collaborate on your next
            project and bring your vision to life.
          </div>
          <div className={` m-3 p-4 border-2 border-almostBlack rounded-md `}>
            Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I&apos;m committed to transforming complex concepts
            into user-friendly solutions. Let&apos;s collaborate on your next
            project and bring your vision to life.
          </div>
          <div className={` m-3 p-4 border-2 border-almostBlack rounded-md `}>
            Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I&apos;m committed to transforming complex concepts
            into user-friendly solutions. Let&apos;s collaborate on your next
            project and bring your vision to life.
          </div>
          <div className={` m-3 p-4 border-2 border-almostBlack rounded-md `}>
            Blockchain web apps, as well as dynamic marketing sites. With an eye
            for innovation and a passion for staying on the cutting edge of web
            development, I&apos;m committed to transforming complex concepts
            into user-friendly solutions. Let&apos;s collaborate on your next
            project and bring your vision to life.
          </div>
        </div>
      </div>
    </main>
  );
}
