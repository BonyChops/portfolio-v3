"use client";

import Link from "next/link";
import { PropsWithChildren, useEffect } from "react";
import NProgress from "nprogress";

export const CustomLink: React.FC<
  PropsWithChildren<{
    href: string;
    className?: string;
    onClick?: () => void;
  }>
> = ({ href, children, onClick, className }) => {
  return (
    <>
      <Link
        href={href}
        onClick={() => {
          NProgress.configure({ showSpinner: false });
          NProgress.start();
          if (onClick) {
            onClick();
          }
        }}
        className={className ?? ""}
      >
        {children}
      </Link>
    </>
  );
};
