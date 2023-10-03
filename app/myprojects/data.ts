import { Project } from "@/types/project"

export const projects: Project[] = [
    {
        title: 'dApp Crypto Platform',
        image: '/images/dappStacker.png',
        description: 'Decentralized application for the DEBTBox coin ecosystem. Users could connect any crypto wallet via Rainbowkit and buy/sell any coin in the DEBT ecosystem. All data was fetched using Wagmi, excecuting smart contracts on the BNB chain to facilitate trustless transactions and automate processes. The DApp was created by a front end team led by myself in close collaboration with a professional web designers.',
        gradient: '/images/lightGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://demo-preview.thedebtbox.com/',
        glow: 'hover:shadow-lightGlow',
    },
    {
        title: 'Crypto Web Application',
        image: '/images/webStacker.png',
        description: 'it web',
        gradient: '/images/purpleGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://demo-preview.thedebtbox.com/',
        glow: 'hover:shadow-purpleGlow',
    },
]