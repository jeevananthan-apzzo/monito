import React from "react";
import localFont from "next/font/local";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";

export const monitoFont = localFont({
  src: [
    {
      path: "../font/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const monitoTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "#fff", // or theme.palette.common.white
          color: "#000",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-gilroy)",
  },
  palette: {
    common: {
      white: "#fdfdfd",
    },
    primary: {
      main: "#002a48",
    },
    secondary: {
      main: "#FCEED5",
    },
  },
});

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={monitoTheme}>
      <div className={monitoFont.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
