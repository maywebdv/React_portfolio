import "./hero.css";
import headerAnimation from "../../../public/animation/headerAnimation.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className=" hero flex">
      <div className="left section">
        <div className="parent-avatar flex">
          <img src="./me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: "spring", damping: 8 }}
          className="title"
        >
          Full-Stack Developer
        </motion.h1>
        <p className="sub-title">
          i'm Mayssa Jarboui a Software Developer from tunisie , im Passionate
          web developer in career transition. My atypical background has
          equipped me with strong problem-solving skills, creativity, and
          attention to detail. I am motivated by technological challenges and
          eager to bring my energy and unique perspective to a dynamic team.{" "}
        </p>
        <div className="all-icons flex">
  <a href="https://x.com/maywebdev" target="_blank" rel="noopener noreferrer">
    <div className="icon icon-twitter"></div>
  </a>
  <a href="https://www.instagram.com/may_jarbouii/" target="_blank" rel="noopener noreferrer">
    <div className="icon icon-instagram"></div>
  </a>
  <a href="https://github.com/maywebdv" target="_blank" rel="noopener noreferrer">
    <div className="icon icon-github"></div>
  </a>
  <a href="https://www.linkedin.com/in/mayssa-jarboui-619179263/" target="_blank" rel="noopener noreferrer">
    <div className="icon icon-linkedin"></div>
  </a>
</div>

      </div>
      <div className="right section   ">
        <Lottie
          className="animation "
          style={{ width: 400 }}
          animationData={headerAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
