import { Project } from "@/types/project"


export const projects: Project[] = [
    {
        title: 'dApp Crypto Platform',
        titleColor: 'text-brightGrey',
        image: '/images/dappStacker.png',
        description: 'Decentralized application for the DEBTBox coin ecosystem. Users could connect any crypto wallet via Rainbowkit and buy/sell any coin in the DEBT ecosystem. All data was fetched using Wagmi, excecuting smart contracts on the BNB chain to facilitate trustless transactions and automate processes. The DApp was created by a front end team led by myself in close collaboration with a professional web designers.',
        gradient: '/images/lightGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://demo-preview.thedebtbox.com/',
        glow: 'hover:shadow-lightGlow',
    },
    {
        title: 'Crypto Web Application',
        titleColor: 'text-brightGrey',
        image: '/images/webStacker.png',
        description: 'it web',
        gradient: '/images/siteGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://app.thedebtbox.com/login',
        glow: 'hover:shadow-goldGlow',
    },
    {
        title: 'Ecosystem Website',
        titleColor: 'text-brightGrey',
        image: '/images/ecoStack.png',
        description: 'it web',
        gradient: '/images/webGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://www.thedebtbox.com/',
        glow: 'hover:shadow-purpleGlow',
    },
    {
        title: 'Crypto Dashboard',
        titleColor: 'text-nonBlackGrey',
        image: '/images/fairStack.png',
        description: 'it web',
        gradient: '/images/fairGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://www.thefairproject.ai/',
        glow: 'hover:shadow-fairGlow',
    },
]

