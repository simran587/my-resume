import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/HOC/Main";
import Left from "./components/HOC/Left";
import Right from "./components/HOC/Right";
import Home from "./components/Home/Home";
import "./index.css";
import Social from "./components/Social/Social";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Interests from "./components/Interests";

function App() {
 
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  

const [isVisible, setIsVisible] = useState(true);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {/*========== HEADER ==========*/}
      <Header />
      <Main>
        <Left>
          <Home />
          <Social />
          <Profile />

          <Skills />
        </Left>
        <Right>
          <Education />
          <Experience />
          <Projects />
          <Languages />
          <Interests />
          </Right>
      </Main>
      <div className="main-container">
      {comments.map((text) => (
        <div className="comment-container">{text}</div>
      ))}
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
    </div>
      {isVisible && (
        <span className="scrolltop show-scroll" onClick={scrollToTop} id="scroll-top">
          <i className="bx bxs-up-arrow-alt scrolltop__icon"></i>
        </span>
      )}
    </>
  );
}

export default App;