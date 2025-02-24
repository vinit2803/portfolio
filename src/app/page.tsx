"use client";
import React, { useEffect, useState } from "react";
import "./css/main.css";

const Page = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["Web Designer", "FullStack Developer", "Software Engineer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 150; // Typing speed (ms)
  const deletingSpeed = 75; // Deleting speed (ms)
  const pauseTime = 1000; // Pause before switching words (ms)
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    if (!isDeleting && displayedText.length < words[currentIndex].length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText(
          (prev) => prev + words[currentIndex][displayedText.length]
        );
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else if (
      !isDeleting &&
      displayedText.length === words[currentIndex].length
    ) {
      // Pause after finishing typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to the next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, pauseTime);
    }

    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, [displayedText, isDeleting, currentIndex, words]);

  return (
    <>
      <section>
        <div className="maindiv">
          <div className="firstdiv">
            <h1>
              <span className="textdisplay">Hi!</span>
              <span className="wave">👋</span>Welcome to my profile
            </h1>
            <h4>
              I am a <span className="textdisplay">{displayedText}</span>
              <span className="cursor">|</span>
            </h4>
            <p className="p1">
              I am a <span className="textdisplay">{displayedText}</span> at a <strong>creative</strong> and
              <strong> innovative</strong> company. I specialize in web
              development and design. I am always looking for new opportunities
              to contribute to the community.
            </p>
          </div>
          <div className="seconddiv">
            <div className="image"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
