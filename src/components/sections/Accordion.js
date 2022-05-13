import React, {useState} from 'react';
import SingleQuestion from "./SingleQuestion";
import { data } from "./Data";

export default function Accordion() {
  const [questions] = useState(data);

  return (
    <div className="p-1" >
      <div className="faqsection">
              <p>FAQ</p>
              </div>
       {questions.map((question) => (
        <SingleQuestion {...question} />
      ))}
        <hr className="hrtag" />
    </div>
  )
}
