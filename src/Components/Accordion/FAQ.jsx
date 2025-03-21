import React, { useState } from "react";
import faqData from "./libraryFAQ.json";
import styles from "./FAQ.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {faqData.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <button
            className={`${styles.questionContainer} ${
              activeIndex === index ? styles.questionContainerActive : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            {item.question}
            <RiArrowDropDownLine
              className={`${styles.arrow} ${
                activeIndex === index ? styles.arrowActive : ""
              }`}
            />
          </button>
          <div
            className={styles.answerContainer}
            style={{
              height: activeIndex === index ? "auto" : "0",
              overflow: "hidden",
            }}
          >
            <div className={styles.answerContent}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
