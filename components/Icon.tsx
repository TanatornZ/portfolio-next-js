import { cx } from "@emotion/css";
import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  className?: string;
  onClick: () => void;
};

function Icon({ icon, className, onClick }: Props) {
  return (
    <div
      className={cx(
        "w-10 h-10 cursor-pointer relative hover:-translate-y-0.5",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        {icon}
      </div>
    </div>
  );
}

export default Icon;
