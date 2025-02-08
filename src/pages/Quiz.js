import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    // Fetch quiz questions from API
    curl https://quizapi.io/api/v1/questions -G \
-d apiKey=8LeW4dlrqiM1pB6ehD4CnDzp270zIOEvMb1M8lMb \
-d limit=20 \
-d category=Cybersecurity
      .then((response) => response.json())
      .then((data) => setQuiz(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Quiz</h1>
      {currentQuestion < quiz.questions.length ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">{quiz.questions[currentQuestion].text}</h2>
          <ul className="space-y-2">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswer(option.isCorrect)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p>Your score: {score} / {quiz.questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
