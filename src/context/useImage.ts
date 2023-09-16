"use client";
import { useContext } from "react";
import { DesignSystemContext, ImageComponent } from "./DesignSystemProvider";

export const useImage = (): ImageComponent | "img" => {
  const context = useContext(DesignSystemContext);

  if (!context?.Image) return "img";

  return context.Image;
};
