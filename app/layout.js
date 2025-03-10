"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./Components/TopBar/page";
import Navbar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";
import BottomBar from "./Components/BottomBar/page";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Provider store={store}>
        <TopBar/>
        <Navbar/>
        {children}
        <Footer/>
        <BottomBar/>
        </Provider>
      </body>
    </html>
  );
}
