import React from "react";
import { cx } from "@emotion/css";
import { IBalloonElement } from "@/constants/balloonElement";

function BalloonElement({
  color,
  size = 0,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  zIndex = 0,
}: IBalloonElement) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: top != 0 ? `${top}%` : "",
        left: left != 0 ? `${left}%` : "",
        right: right != 0 ? `${right}%` : "",
        bottom: bottom != 0 ? `${bottom}%` : "",
        zIndex: zIndex != 0 ? `${zIndex}` : "",
      }}
      className={cx("rounded-full move-up-down-animation absolute", color)}
    ></div>
  );
}

export default BalloonElement;
