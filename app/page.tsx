"use client";

import { useResizeDetector } from "react-resize-detector";

export const runtime = "edge";
export const preferredRegion = "iad1";

export default function Home() {
  const { width, height, ref } = useResizeDetector();
  return <div ref={ref}>{`${width}x${height}`}</div>;
}
