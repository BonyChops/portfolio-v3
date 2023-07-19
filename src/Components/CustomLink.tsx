/* eslint-disable rulesdir/no-next-link */
"use client";

import Link from "next/link";
import { MouseEventHandler, PropsWithChildren, useEffect } from "react";
import NProgress from "nprogress";

export const CustomLink: React.FC<
  PropsWithChildren<{
    href?: string;
    className?: string;
    onClick?: MouseEventHandler;
    style?: React.CSSProperties;
  }>
> = ({ href, children, onClick, className, style }) => {
  return (
    <>
      <Link
        href={href ?? "#"}
        onClick={(e) => {
          NProgress.configure({ showSpinner: false });
          NProgress.start();
          if (onClick) {
            onClick(e);
          }
        }}
        style={style}
        className={className ?? ""}
      >
        {children}
      </Link>
    </>
  );
};
