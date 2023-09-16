"use client";
import { useContext } from "react";
import { DesignSystemContext, LinkComponent } from "./DesignSystemProvider";

export const useLink = (): LinkComponent | "a" => {
  const context = useContext(DesignSystemContext);

  if (!context?.Link) return "a";

  return context.Link;
};
