import { cx } from "@emotion/css";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id: string;
};

function Section({ children, className, id }: Props) {
  return (
    <div id={id}>
      <div className={cx("w-full p-4 py-12 md:p-16", className)}>
        {children}
      </div>
    </div>
  );
}

export default Section;
