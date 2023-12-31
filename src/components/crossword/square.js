import styles from "@/styles/crossword.module.css";
import React, { useState } from 'react';


function Square(props) {
  let {
    character,
    key_character,
    handleSquareInput,
    handleKeyDown,
    row,
    col,
    clueNumber,
    dimensions,
    inputLocation,
  } = props;

  const [correct, setCorrect] = useState(false);

  function handleChange(event) {
    handleSquareInput(event.target.value, row, col, inputLocation);
    event.target.value.toUpperCase() == key_character ? setCorrect(true) : setCorrect(false);
  }

  function handleDownKey(event) {
    handleKeyDown(event, row, col, inputLocation);
  }

  return (
    <>
      <div className={styles.div}>
        {clueNumber != 0 ? <p className={styles.number}>{clueNumber}</p> : null}
        <input
          ref={(element) =>
            (inputLocation.current[row * dimensions + col] = element)
          }
          className={styles.square}
          readOnly={key_character === "*" || key_character === "&"}
          style={
            key_character == "*"
              ? { backgroundColor: "black", borderColor: "black" }
              : key_character == "&"
              ? {
                  backgroundColor: "white",
                  height: 0,
                  width: 0,
                  border: 0,
                }
              : correct == true
              ? { backgroundColor: "green", borderColor: "black" }
              : { backgroundColor: "red", borderColor: "black" }

          }
          maxLength={1}
          type="text"
          onChange={handleChange}
          onKeyDown={handleDownKey}
          disabled={
            key_character === "*" || key_character === "&"
          }
        ></input>
      </div>
    </>
  );
}

export default Square;
