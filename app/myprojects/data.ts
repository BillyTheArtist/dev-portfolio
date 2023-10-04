import { Project } from "@/types/project"


export const projects: Project[] = [
    {
        title: 'dApp Crypto Platform',
        titleColor: 'text-brightGrey',
        image: '/images/dappStacker.png',
        description: 'Decentralized application for the DEBTBox coin ecosystem. Users could connect any crypto wallet via Rainbowkit and buy/sell any coin in the DEBT ecosystem. All data was fetched using Wagmi, excecuting smart contracts on the BNB chain to facilitate trustless transactions and automate processes. The DApp was created in close collaboration with a professional web designers.',
        gradient: '/images/lightGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://demo-preview.thedebtbox.com/',
        glow: 'hover:shadow-lightGlow',
    },
    {
        title: 'Crypto Web Application',
        titleColor: 'text-brightGrey',
        image: '/images/webStacker.png',
        description: 'Cutting-edge cryptocurrency buying platform. Admin tools have been developed for efficient user account and transaction management. Robust user verification processes enhance security. Real-time transaction monitoring provides valuable insights. Educational resources help users make informed decisions.',
        gradient: '/images/siteGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://app.thedebtbox.com/login',
        glow: 'hover:shadow-goldGlow',
    },
    {
        title: 'Ecosystem Website',
        titleColor: 'text-brightGrey',
        image: '/images/ecoStack.png',
        description: 'This platform serves as a hub for cryptocurrency enthusiasts, investors, and researchers to explore and engage with various coin projects in an informative and educational environment. Users have access to real-time analytics and market data for each coin, enabling them to make informed investment decisions and stay updated on market trends.',
        gradient: '/images/webGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://www.thedebtbox.com/',
        glow: 'hover:shadow-purpleGlow',
    },
    {
        title: 'Crypto Dashboard',
        titleColor: 'text-nonBlackGrey',
        image: '/images/fairStack.png',
        description: 'Dashboard developed for crypto coin project with plans of adding more projects to the environment in the future. The user can buy coin and see real-time analytics on their personalized dashboard, including license count, token price, and mining statistics.',
        gradient: '/images/fairGradient.svg',
        descriptionGradient: '/images/descriptionGradient.svg',
        link: 'https://www.thefairproject.ai/',
        glow: 'hover:shadow-fairGlow',
    },
]

