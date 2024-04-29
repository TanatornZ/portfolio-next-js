export type IBalloonElement = {
  color: string;
  size: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  zIndex?: number;
};

export const balloonElementList: IBalloonElement[] = [
  {
    size: 80,
    color: "!bg-red-500/50",
    right: 5,
    bottom: 10,
  },
  {
    size: 100,
    color: "!bg-blue-500/50",
    left: 5,
    bottom: 5,
  },
  {
    size: 140,
    color: "!bg-orange-500/50",
    left: 15,
    top: 10,
  },
  {
    size: 140,
    color: "!bg-green-500/50",
    right: 10,
    top: 40,
  },
  {
    size: 140,
    color: "!bg-orange-500/50",
    left: 40,
    bottom: 10,
  },
  {
    size: 80,
    color: "!bg-orange-500/50",
    right: 15,
    top: 10,
  },
  {
    size: 80,
    color: "!bg-red-500/50",
    left: 25,
    top: 40,
  },
];
