import Link from "next/link";
import React from "react";
import { CustomLink } from "./CustomLink";

export default function HeaderLink(props: {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  const { children, href, onClick } = props;
  return (
    <CustomLink
      href={href}
      className="transition text-4xl font-bold  border-b-2 border-transparent hover:border-gray-700"
      onClick={onClick}
    >
      {children}
    </CustomLink>
  );
}
