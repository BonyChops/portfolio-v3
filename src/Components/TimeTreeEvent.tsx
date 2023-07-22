import React from "react";

export default function TimeTreeEvent(props: {
  children: React.ReactNode;
  noAbove?: boolean;
  noBottom?: boolean;
  className?: string;
  boxClassName?: string;
}) {
  const { children, noAbove, noBottom, className, boxClassName } = props;
  return (
    <div className={`flex parent min-h-[4rem] ${className ?? ""}`}>
      <div className="w-16 relative">
        <div className="h-full flex items-center align-middle">
          <div className="rounded-full border border-spacing-1 border-gray-200 shadow-md w-4 h-4 bg-white mx-auto" />
        </div>
        <div
          className={`absolute ${noAbove || noBottom ? "h-1/2" : "h-full"} ${
            noAbove ? "top-1/2" : "top-0"
          } w-full flex items-center`}
        >
          <div className="h-full border-l-2 border-gray-300 mx-auto -z-10" />
        </div>
      </div>
      <div className="md:w-72 w-64 py-4 ">
        <div
          className={`rounded-xl shadow-xl w-full min-h-full px-4 py-2 ${
            boxClassName ?? "bg-white dark:bg-gray-600 dark:bg-opacity-60"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
