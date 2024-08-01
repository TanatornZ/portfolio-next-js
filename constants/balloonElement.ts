export type IBalloonElement = {
  color: string;
  size: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  zIndex?: number;
  className?: string;
  gsapAnimation?: gsap.TweenVars;
};

export const balloonElementList: IBalloonElement[] = [
  {
    size: 80,
    color: "!bg-red-500/50",
    right: 5,
    bottom: 10,
    gsapAnimation: {
      y: -100,
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
  },
  {
    size: 100,
    color: "!bg-blue-500/50",
    left: 5,
    bottom: 5,
    gsapAnimation: {
      y: -100,
      repeat: -1,
      yoyo: true,
    },
  },
  {
    size: 140,
    color: "!bg-orange-500/50",
    left: 15,
    top: 10,
    gsapAnimation: {
      y: -50,
      repeat: -1,
      duration: 3,
      yoyo: true,
    },
  },
  {
    size: 140,
    color: "!bg-green-500/50",
    right: 10,
    top: 40,
    gsapAnimation: {
      y: -100,
      repeat: -1,
      yoyo: true,
      duration: 4,
    },
  },
  {
    size: 140,
    color: "!bg-orange-500/50",
    left: 40,
    bottom: 10,
    gsapAnimation: {
      x: -40,
      repeat: -1,
      yoyo: true,
      duration: 3,
    },
  },
  {
    size: 80,
    color: "!bg-orange-500/50",
    right: 15,
    top: 10,
    gsapAnimation: {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 5,
    },
  },
  {
    size: 80,
    color: "!bg-red-500/50",
    left: 25,
    top: 40,
    gsapAnimation: {
      x: -100,
      repeat: -1,
      yoyo: true,
      duration: 4,
    },
  },
];
