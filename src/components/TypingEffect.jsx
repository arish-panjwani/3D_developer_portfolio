/** @format */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const TypingEffect = ({
  texts,
  typingSpeed = 100,
  cursorBlinkSpeed = 500,
  onComplete,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    if (currentIndex < texts.length) {
      const currentLine = texts[currentIndex];
      const typingTimeout = setTimeout(() => {
        setCurrentText((prev) =>
          currentLine.length > prev.length
            ? currentLine.slice(0, prev.length + 1)
            : prev
        );

        if (currentLine === currentText) {
          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
          }, 1000); // Pause before typing the next line
        }
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } else {
      setTypingCompleted(true);
      setCursorVisible(false);
      if (onComplete) onComplete(); // Notify parent component when done
    }
  }, [currentText, currentIndex, texts, typingSpeed, onComplete]);

  useEffect(() => {
    if (!typingCompleted) {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, cursorBlinkSpeed);
      return () => clearInterval(cursorInterval);
    }
  }, [cursorBlinkSpeed, typingCompleted]);

  return (
    <span>
      {currentText}
      <span style={{ visibility: cursorVisible ? "visible" : "hidden" }}>
        |
      </span>
    </span>
  );
};

export default TypingEffect;
