import halloween from "@assets/image/projects/halloween.png";
import NFT from "@assets/image/projects/NFT.png";
import calculator from "@assets/image/projects/calculator.png";
import { StaticImageData } from "next/image";

type IProjectList = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
};

export const projectList: IProjectList[] = [
  {
    id: "Halloween",
    title: "Halloween website",
    description: "Halloween website is clone ui website for practices HTML/CSS",
    image: halloween,
    url: "https://starlit-scone-55779c.netlify.app",
  },
  {
    id: "Calculator",
    title: "Calculator PWA",
    description:
      "calculator website is website for practices front-end development and progressive web application",
    image: calculator,
    url: "https://inquisitive-sprite-d838e5.netlify.app",
  },
  {
    id: "NFT Website",
    title: "NFT website",
    description:
      "NFT website is clone ui website for practices HTML/CSS and NFT style",
    image: NFT,
    url: "https://jocular-puffpuff-27b244.netlify.app",
  },
];
