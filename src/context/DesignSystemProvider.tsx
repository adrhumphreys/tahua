"use client";
import { createContext, FC, ReactNode } from "react";
import { ImageProps } from "next/image";
import { LinkProps } from "next/link";

export type LinkComponent = (props: LinkProps) => JSX.Element | null;
export type ImageComponent = (props: ImageProps) => JSX.Element | null;

export const DesignSystemContext = createContext<
  { Link: LinkComponent; Image: ImageComponent } | undefined
>(undefined);

type Props = {
  children: ReactNode;
  Link: LinkComponent;
  Image: ImageComponent;
};

export const DesignSystemProvider: FC<Props> = ({ children, Link, Image }) => {
  return (
    <DesignSystemContext.Provider value={{ Link, Image }}>
      {children}
    </DesignSystemContext.Provider>
  );
};
