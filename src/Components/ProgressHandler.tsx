"use client";
import { useNavigationEvent } from "./useNavigationEvent";
import NProgress from "nprogress";

export default function ProgressHandler() {
  useNavigationEvent(() => {
    NProgress.done();
  });
  return <></>;
}
