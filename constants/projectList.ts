import halloween from "@assets/image/projects/halloween.png";
import NFT from "@assets/image/projects/NFT.png";
import Kampangphet from "@assets/image/projects/wihan-sean.png";
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
    id: "wi-han-sian",
    title: "Wi Han Sian Kamphangphet",
    description:
      "Wi Han Sian Kampangphet is website for show list of sculpture in wi han sian Kamphaengphet combine with feature text to speech to read sculpture information (Thai language)",
    image: Kampangphet,
    url: "https://wi-han-sian-kamphaengphet.vercel.app/",
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
