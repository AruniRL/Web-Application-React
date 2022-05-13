import React,{ useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    
      <div className="qa">
        <div className="flex items-center justify-between border-2 p-3 my-2 rounded-md">
          <h2
            onClick={() => setShowAnswer(!showAnswer)}
            className=" question text-s cursor-pointer"
          >
            {question}
          </h2>
          {showAnswer ? (
            <button onClick={()=> setShowAnswer(!showAnswer)}>
              <FaMinus />
            </button>
          ) : (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <BsPlus className="text-s" />
            </button>
          )}
        </div>
        <div className="answer px-1">{showAnswer && <p>{answer}</p>}</div>
      </div>
    
  );
}
