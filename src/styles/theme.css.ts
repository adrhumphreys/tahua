import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "yellow",
  },
  font: {
    body: "arial",
  },
});
