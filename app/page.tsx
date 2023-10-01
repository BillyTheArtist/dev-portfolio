"use client";
import React, { useState } from "react";
import { Modal } from "@/components/Modal";
import { HeptaBox } from "@/components/HeptaBox";
import { FooterPeaks } from "@/components/FooterPeaks";
import { ComputerIcon } from "@/components/icons/ComputerIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { MusicIcon } from "@/components/icons/MusicIcon";
import { CardIcon } from "@/components/icons/CardIcon";
import { SeparatorFooter } from "@/components/ui/SeparatorFooter";
import { Separator } from "@/components/ui/separator";
import { Roboto_Slab, Montserrat } from "next/font/google";
import Image from "next/image";
import { BrushIcon } from "@/components/icons/BrushIcon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

{
  /* Fonts */
}

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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={montserrat.className}>
      {/* Page Parent Box */}
      <div className="flex flex-col min-h-screen relative lg:bg-baseBG">
        <div className="bg-boxLite flex justify-center items-center">
          <NavigationMenu className="absolute top-0  md:right-0 mt-4 md:mr-14">
            <NavigationMenuList className="bg-buttonOrange p-2 rounded-full">
              <Link href="/skills">
                <NavigationMenuItem className="min-w-[100px] bg-buttonOrange  p-[4px] rounded-l-2xl rounded-r-[2px] text-center hover:bg-baseOrange">
                  <NavigationMenuLink
                    className={`text-brightGrey ${montserratSemiBold.className}`}
                  >
                    Skills
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>
              <Separator decorative />
              <Link href="/myprojects">
                <NavigationMenuItem className="min-w-[100px] bg-buttonOrange  p-[4px] rounded-[2px] text-center hover:bg-baseOrange">
                  <NavigationMenuLink
                    className={`text-brightGrey ${montserratSemiBold.className}`}
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>
              <Separator decorative />
              <Link href="/contact">
                <NavigationMenuItem className="min-w-[100px] bg-buttonOrange  p-[4px] rounded-r-2xl rounded-l-[2px] text-center hover:bg-baseOrange">
                  <NavigationMenuLink
                    className={`text-brightGrey ${montserratSemiBold.className}`}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Landing Box section-Text and Image */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center">
          {/* Text half */}
          <div className="w-full h-full bg-gradient-to-b from-nonBlack to-almostBlack md:bg-gradient-to-r from-nonBlack to-almostBlack lg:bg-gradient-to-r from-nonBlack to-almostBlack xl:bg-gradient-to-r from-nonBlack to-almostBlack text-brightGrey flex justify-center ">
            <div className="relative">
              <div className="absolute top-0 -left-20 w-72 h-72 bg-negativeOrange rounded-full opacity-50 blur-2xl animate-blob animation-delay-2000" />
              <div className="absolute top-0 -left-60 w-72 h-72 bg-niceOrange rounded-full opacity-50 blur-2xl animate-blob" />
              <div className="absolute top-20 right-40 w-72 h-72 bg-boxLite rounded-full opacity-50 blur-2xl animate-blob animation-delay-4000" />
              <h1
                className={`text-standardGrey mt-40 md:mt-40 lg:mt-40 xl:mt-60 text-4xl mix-blend-screen ${montserratSemiBold.className}`}
              >
                Billy Townsend
              </h1>
              <p
                className={`text-standardGrey text-2xl mix-blend-screen ${montserratSemiBold.className}`}
              >
                Software Engineer
              </p>
              <p
                className={`text-niceOrange mt-5 text-1xl leading-relaxed mix-blend-screen  ${montserrat.className}`}
              >
                Industry contemporary software
              </p>
              <p
                className={`text-niceOrange text-1xl mix-blend-screen ${montserrat.className}`}
              >
                Cadmium
              </p>

              <p
                className={`mt-10 text-standardGrey text-sm text-left leading-relaxed ${montserratLight.className}`}
              >
                Blockchain web apps, as well as dynamic
                <br />
                marketing sites. With an eye for
                <br />
                innovation and a passion for staying
                <br />
                on the cutting edge of web development,
                <br />
                I&apos;m committed to transforming complex
                <br />
                concepts into user-friendly solutions.
                <br />
                Let&apos;s collaborate on your next project
                <br />
                and bring your vision to life.
              </p>
              <button
                onClick={openModal}
                className="mt-10 bg-buttonOrange text-brightGrey font-semibold py-2 px-4 rounded-3xl transition duration-300 ease-in-out"
              >
                Open the thing
              </button>
            </div>
          </div>
          {/* Image half */}
          <div className="w-full h-full bg-almostBlack flex items-end max-w-screen">
            <div className="">
              <Image
                src="/images/trueBlur.png"
                alt="hero"
                height={1024}
                width={1024}
              />
            </div>
          </div>
        </section>
        <section className=" flex w-full justify-center bg-gradient-to-b from-transparent from 30% via-baseBG via-10% to-liteBG to-90%  mt-[-150px] md:mt-[-80px] lg:mt-[-100px] pt-[100px] mb-[-50px] pb-[50px]mb-[-50px] pb-[50px]">
          <div className="max-w-[1470px] mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center justify-center">
            <HeptaBox>
              <ComputerIcon />
              <h1
                className={`mb-3 text-brightGrey text-xl ${montserrat.className}`}
              >
                Computer
              </h1>
              <p
                className={` text-brightGrey text-sm text-center leading-relaxed ${montserratLight.className}`}
              >
                Blockchain web apps, as well as dynamic
                <br />
                I&apos;m committed to transforming complex
                <br />
                Let&apos;s collaborate on your next project
              </p>
            </HeptaBox>
            <HeptaBox>
              <MusicIcon />
              <h1
                className={`mb-3 text-brightGrey text-xl ${montserrat.className}`}
              >
                Music Taste
              </h1>
              <p
                className={`mb-3 text-brightGrey text-sm text-center leading-relaxed ${montserratLight.className}`}
              >
                Blockchain web apps, as well as dynamic
                <br />
                I&apos;m committed to transforming complex
                <br />
                Let&apos;s collaborate on your next project
              </p>
            </HeptaBox>
            <HeptaBox>
              <CardIcon />
              <h1
                className={`mb-3 text-brightGrey text-xl ${montserrat.className}`}
              >
                Card Games
              </h1>
              <p
                className={` text-brightGrey text-sm text-center leading-relaxed ${montserratLight.className}`}
              >
                Blockchain web apps, as well as dynamic
                <br />
                I&apos;m committed to transforming complex
                <br />
                Let&apos;s collaborate on your next project
              </p>
            </HeptaBox>
            <HeptaBox>
              <BrushIcon />
              <h1
                className={`mb-3 text-brightGrey text-xl ${montserrat.className}`}
              >
                Artwork
              </h1>
              <p
                className={` text-brightGrey text-sm text-center leading-relaxed ${montserratLight.className}`}
              >
                Blockchain web apps, as well as dynamic
                <br />
                I&apos;m committed to transforming complex
                <br />
                Let&apos;s collaborate on your next project
              </p>
            </HeptaBox>
          </div>
        </section>
        {/* Modal */}

        {/* Footer */}
        <FooterPeaks />
        <footer className="grid grid-cols-1 place-items-center bg-boxLite md:space-x-7">
          <SeparatorFooter />
          <div className="flex items-center justify-center bg-boxLite md:space-x-7">
            <LinkedinIcon />
            <GithubIcon />
            <p
              className={`mb-3 text-baseBG text-mg ${montserratBold.className}`}
            >
              &copy; {new Date().getFullYear()} Billy Townsend. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
      <Modal isOpen={isModalOpen} handleClose={closeModal}>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Modal Content</h2>
          <p>This is the content of the modal.</p>
          <div className="h-40 w-40 border-[6px] border-b-transparent border-t-transparent  border-boxLite rounded-full" />
        </div>
      </Modal>
    </main>
  );
}
