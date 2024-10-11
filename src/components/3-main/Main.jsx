import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    {
      const newArr = myProjects.filter((item) => {
        const zzz = item.category.find((myItem) => {
          return myItem === buttonCategory;
        });
        return zzz === buttonCategory;
      });
      setArr(newArr);
    }
  };
  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className=" flex right-section">

     
          {arr.map((item) => {
            return (
              <article
               /* layout
                initial={{ transform: "scale(0) " }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring" }}*/
                key={item.imgPath}
                className=" card"
              >
                <img width={266} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle} </h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
      
      </section>
    </main>
  );
};

export default Main;
