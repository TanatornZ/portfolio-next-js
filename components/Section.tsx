import { cx } from "@emotion/css";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  return (
    <div className={cx("w-full p-4 py-12 md:p-16", className)}>{children}</div>
  );
}

export default Section;
