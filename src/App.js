import React, { useState } from "react"
import Info from "./components/InfoSP"
import About from "./components/AboutSP"
import Interest from "./components/InterestSP"
import Footer from "./components/FooterSP"
import "./solop.css";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="outcard" id={theme}>

          <div className="card">
            <div className='incard'>
              <Info />
              <About />
              <Interest />
              <Footer />
            </div>

            <div className="react-switch">
              <label className="label">{theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
            </div>

          </div>

        </div>
      </ThemeContext.Provider>  
    )
  }
  
