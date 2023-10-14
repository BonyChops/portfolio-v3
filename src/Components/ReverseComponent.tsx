import React from "react";

export default function ReverseComponent(props: {
  children: React.ReactNode;
  reverse?: boolean;
}) {
  const { children } = props;
  const reverse = props.reverse ?? true;

  if (Array.isArray(children)) {
    return reverse ? children.slice().reverse() : children;
  }
  return children;
}
