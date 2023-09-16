import { globalStyle } from "@vanilla-extract/css";
import { fonts } from "./tokens";
// import "./fonts.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
});

globalStyle("html, body", {
  fontFamily: fonts.calibre,
  height: "100%",
});

globalStyle("body", {
  lineHeight: 1.3,
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
});

// CSS reset to set the default for images to be block to remove the spacing that comes from
// an image being set to inline
globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  width: "100%",
  height: "auto",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

globalStyle("#root, main, #__next", {
  height: "100%",
});

globalStyle("button", {
  appearance: "button",
  backgroundColor: "transparent",
  backgroundImage: "none",
  border: 0,
  cursor: "pointer",
  color: "inherit",
  padding: 0,
});

globalStyle("[type=button],[type=reset],[type=submit]", {
  appearance: "button",
  backgroundColor: "transparent",
  backgroundImage: "none",
  border: 0,
  cursor: "pointer",
  color: "inherit",
  padding: 0,
});
