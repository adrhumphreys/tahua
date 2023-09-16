import type { FC, ReactNode } from "react";
import * as styles from "./Text.css";

type Props = {
  children: ReactNode;
};

export const Text: FC<Props> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
