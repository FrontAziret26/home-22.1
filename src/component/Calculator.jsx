import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { calculatorActions } from "../store/calculator/CalculatorSlice";
import { Button, TextField } from "@mui/material";

import { useState } from "react";

export const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const addHandler = () => {
    dispatch(calculatorActions.addNumber(Number(inputValue)));
    setInputValue("");
  };

  const incremenHandler = () => {
    dispatch(calculatorActions.incNumber(Number(inputValue)));
    setInputValue("");
  };

  const myltiPlayHandler = () => {
    dispatch(calculatorActions.multiPlay(Number(inputValue)));
    setInputValue("");
  };
  const subtractHandler = () => {
    dispatch(calculatorActions.subtract(Number(inputValue)));
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Calculator</h1>
        <h2>Result: {result}</h2>
      <WrapperContainer>
        <TextField
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div >
        <Button variant="contained" onClick={addHandler}>
          +
        </Button>
        <Button variant="contained" onClick={incremenHandler}>
          -
        </Button>{" "}
        <Button variant="contained" onClick={myltiPlayHandler}>
          *
        </Button>{" "}
        <Button variant="contained" onClick={subtractHandler}>
          /
        </Button>
        </div>
      </WrapperContainer>
    </>
  );
};

const WrapperContainer = styled.div`
  width: 100%;
  height: 20vh;
  border: 3px solid red;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
