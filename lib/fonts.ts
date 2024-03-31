import { Fira_Sans } from "next/font/google";

import localFont from "next/font/local";

export const zenKakuGothicNew = localFont({
  src: [
    {
      path: "../public/fonts/ZenKakuGothicNew-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ZenKakuGothicNew-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "600"],
});

export const firaSansHeading = Fira_Sans({
  subsets: ["latin"],
  weight: ["300"],
});
