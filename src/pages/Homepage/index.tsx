import useAnswers from "hooks/useAnswers";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const { unansweredQuestions, questionsWithAnswers } = useAnswers();
  const [firstUnansweredQuestion] = unansweredQuestions;
  const hasStarted = useMemo(
    () =>
      questionsWithAnswers.some((question) => question.answer !== undefined),
    [questionsWithAnswers]
  );
  return (
    <div className={styles.container}>
      <h1>Spiritual Gifts Assessment</h1>
      <p>
        Response to the following assessment according to who you are, not who
        you would like to be, or think you ought to be. Consider: How true are
        these statements for you? What has been your experience?
      </p>
      {hasStarted ? (
        <Link
          to={`/question-set/${Math.ceil(firstUnansweredQuestion.number / 19)}`}
        >
          Continue
        </Link>
      ) : (
        <Link to="/question-set/1">Start</Link>
      )}
    </div>
  );
};

export default Homepage;