// @ts-nocheck
import Hero from "./components/2-hero/hero"
import Header from "./components/1-header/Header"
import Contact from "./components/4-contact/Contact"
import Footer from "./components/5-footer/footer"
import Main from "./components/3-main/main"

import { useEffect, useState } from "react"



function App() {
  useEffect(() =>{

    window.addEventListener("scroll",()=>{
      if(window.scrollY >300){
      setshowScroll(true)}
      else{
        setshowScroll(false)
      }
    })
  } ,[]);

const [showScroll,setshowScroll]=useState(false);
    return (
        <div id="up" className="container">
          <Header/> 
        
          <Hero/>
          <div className="divider"/>
          <Main/>
          <div className="divider"/>
          <Contact/>
          <div className="divider"/>
          <Footer/>
          { showScroll && (
          <a href="up">
          <button className="scrollTop icon-arrow-up-circle"></button>
        </a>
        )}
        </div>
    )
}

export default App 