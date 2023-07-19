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
  const isExternal = href?.startsWith("http") ?? false;
  return (
    <>
      <Link
        href={href ?? "#"}
        onClick={(e) => {
          if (isExternal) {
            return;
          }
          NProgress.configure({ showSpinner: false });
          NProgress.start();
          if (onClick) {
            onClick(e);
          }
        }}
        style={style}
        className={className ?? ""}
        target={isExternal ? "_blank" : ""}
      >
        {children}
      </Link>
    </>
  );
};
