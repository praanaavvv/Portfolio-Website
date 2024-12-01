export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'PeerLink-Dex (ETH GLOBAL 2024 SUPERHACK)  ',
    desc: 'Developed a decentralized Over-The-Counter (OTC) DEX that enables users to create secure escrow arrangements for peer-to-peer token exchanges',
    subdesc: 'Leveraged Solidity to implement smart contracts ensuring trustless, efficient, and gas-optimized transactions while focusing on user experience and security, making the platform accessible and reliable for all users.',
    href: 'https://peerlinkdex.vercel.app/',
    texture: '/textures/project/peerlink.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Solidity',
        path: '/assets/solidity.png',
      },
    ],
  },
  {
    title: 'Uniswap V3 SUBGRAPH',
    desc: 'A subgraph for tracking all pools, swaps, profitable wallets on UniswapV3',
    subdesc:
      'An advanced subgraph designed for Uniswap V3, enabling efficient tracking of all liquidity pools, swap transactions, and identifying profitable wallets. This subgraph aggregates on-chain data, providing real-time insights into liquidity dynamics, trade performance, and wallet profitability for enhanced DeFi analytics.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/subgraph.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
     
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 2,
        name: 'graphQL',
        path: '/assets/graphql.png',
      },
      
    ],
  },
  {
    title: 'Defi Stablecoin',
    desc: 'Developed a decentralized stablecoin backed by Wrapped ETH (WETH) and Wrapped BTC (WBTC).',
    subdesc:
      'The system mints stablecoins when users deposit collateral (WETH or WBTC) at a fixed collateralization ratio. Implemented liquidation mechanics to maintain a stable value similar to DAI.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/mp.mp4',
    logo: '/assets/image (5).png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Solidity',
        path: '/assets/solidity.png',
      },
      
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'SOLD.CAR.FOR.BTC',
    pos: 'Backend Developer',
    duration: 'Oct 2024 - Nov 2024',
    title: "SOLD.CAR.FOR.BTC is a runes token for which I deployed a subgraph for tracking all pools, swaps, profitable wallets on UniswapV3 . I also made a discord bot which would fetch all the data about all rising , trending , top and migrating memecoins on pump.fun. ",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  
];