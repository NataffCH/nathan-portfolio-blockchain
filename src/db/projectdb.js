import {
  cryptocurrency,
  css,
  express,
  html,
  javascript,
  mongodb,
  nextjs,
  node,
  promptEngineering,
  python,
  react,
  redux,
  tailwind,
  typescript,
} from "./techstack";

import img1 from "../projects/crypto-trading-bot/1.png";
import img2 from "../projects/sniping-bot/1.png";
import img3 from "../projects/stock-bot/1.png";

export const ProjectList = [
  {
    heading: "Cryptocurrency Trading Bot",
    img: img1,
    title: "",
    description:
      "Cryptocurrency trading bot is a bot designed specifically for trading cryptocurrencies. These bots are programmed to analyze market data, identify trading opportunities, and execute trades on cryptocurrency exchanges.",
    techStack: [node, cryptocurrency],
    liveLink: "https://marvelous-crack-5191.vercel.app/",
    gitLink: "https://github.com/SumatM/Spartan",
  },
  {
    heading: "Sniping Bot",
    img: img2,
    title: "",
    description:
      "Sniping bots are a type of automated software program designed to execute trades at specific price levels or market conditions. These bots are commonly used in cryptocurrency and stock trading to take advantage of sudden price movements or to enter or exit positions quickly.",
    techStack: [node, express, react],
    liveLink: "https://puny-potato-4945.vercel.app/",
    gitLink: "https://github.com/SumatM/Arivu",
  },
  {
    heading: "Stock Bot",
    img: img3,
    title: "",
    description:
      "Stock bot is a bot that can refer to any type of bot related to stocks. This could include trading bots, but it could also refer to bots that perform other functions, such as managing portfolios, tracking stock prices, or providing market analysis.",
    techStack: [python, cryptocurrency],
    liveLink: "https://indian-states.netlify.app/index.html",
    gitLink: "https://github.com/SumatM/Indian-States",
  },
];
