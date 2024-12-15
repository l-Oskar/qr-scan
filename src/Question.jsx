import React from "react";
import "./Question.css";

const Question = (props) => {
  let getBuffer = React.createRef();

  const onInputChange = () => {
    let text = getBuffer.current.value;
    props.updateNewMessageText(text);
  };

  const checkInfo = () => {
    let answer = false;
    if (props.decodedText === props.state.inputedText) {
      answer = true;
    }
    return answer.toString();
  };

  return (
    <div className="question_main">
      <p>Decoded text: {props.decodedText}</p>
      <input
        value={props.state.inputedText}
        onChange={onInputChange}
        ref={getBuffer}
      />
      <p id="question_info">
        Info: {!props.state.inputedText ? "Check QR" : checkInfo()}
      </p>
    </div>
  );
};

export default Question;
