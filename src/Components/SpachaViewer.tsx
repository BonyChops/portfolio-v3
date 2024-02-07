"use client";
import React, { useEffect } from "react";
import { Spacha, SpachaImage } from "react-spacha";

export default async function SpachaViewer() {
  const [icon, setIcon] = React.useState<HTMLImageElement | null>(null);
  const [imageMode, setImageMode] = React.useState<boolean>(false);
  useEffect(() => {
    const img = new Image();
    img.onload = function () {
      setIcon(img);
    };
    img.src = "https://github.com/BonyChops.png";
  }, []);
  const SpachaComponent = imageMode ? SpachaImage : Spacha;
  return (
    <div className="w-1/2">
      <SpachaComponent
        price={new Date().getSeconds() * 100}
        message={`今日は${new Date()}`}
        scale={0.8}
        user={icon ? { name: "BonyChops", img: icon } : { name: "BonyChops" }}
      />
      <input
        className="text-large mt-4 mr-2"
        type="checkbox"
        onChange={(e) => setImageMode(e.target.checked)}
        checked={imageMode}
      />
      Canvas(画像)モード
    </div>
  );
}
