import React from "react";
import {Header} from "./Header"
import {ThemeProvider} from "./Context/ThemeProvider";

 export default function App() {
  return (
   <ThemeProvider>
        <Header/>
   </ThemeProvider>
  );
}

