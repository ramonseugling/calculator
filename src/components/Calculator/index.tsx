import "./styles.scss";
import {
  FaPlus,
  FaMinus,
  FaDivide,
  FaEquals,
  FaTimes,
  FaUndo,
} from "react-icons/fa";
import { useState } from "react";

export function Calculator() {
  const [numberDisplayed, setNumberDisplayed] = useState("");
  const [operation, setOperation] = useState("");
  const [firstNumberOfOperation, setFirstNumberOfOperation] = useState("");
  const [secondNumberOfOperation, setSecondNumberOfOperation] = useState("");

  const handleUseNumber = (value: string) => {
    if (!numberDisplayed && value === "0") return;

    const newNumber = numberDisplayed.concat(value);

    if (firstNumberOfOperation) {
      if (secondNumberOfOperation) setSecondNumberOfOperation(value);

      const newSecondNumber = secondNumberOfOperation.concat(value);
      setSecondNumberOfOperation(newSecondNumber);
    }

    setNumberDisplayed(newNumber);
  };

  const handleAddOperation = (signal: string) => {
    setFirstNumberOfOperation(numberDisplayed);
    setOperation(signal);

    const newNumberToDisplayWithOperation = numberDisplayed.concat(signal);

    setNumberDisplayed(newNumberToDisplayWithOperation);
  };

  const handleResult = (secondOperation = "") => {
    switch (secondOperation) {
      case "%":
        const secondNumberInPercentage = Number(secondNumberOfOperation) / 100;

        setSecondNumberOfOperation(String(secondNumberInPercentage));
        break;
      default:
        break;
    }

    switch (operation) {
      case "+":
        const resultOfPlus =
          Number(firstNumberOfOperation) + Number(secondNumberOfOperation);

        setNumberDisplayed(String(resultOfPlus));

        break;

      case "-":
        const resultOfMinus =
          Number(firstNumberOfOperation) - Number(secondNumberOfOperation);

        setNumberDisplayed(String(resultOfMinus));

        break;

      case "x":
        const resultOfMultiplication =
          Number(firstNumberOfOperation) * Number(secondNumberOfOperation);

        setNumberDisplayed(String(resultOfMultiplication));

        break;
      case "÷":
        const resultOfDivision =
          Number(firstNumberOfOperation) / Number(secondNumberOfOperation);

        setNumberDisplayed(String(resultOfDivision));

        break;
      case "%":
        const resultOfPercentage =
          Number(firstNumberOfOperation) / Number(secondNumberOfOperation);

        setNumberDisplayed(String(resultOfPercentage));

        break;
    }
  };

  const resetNumber = () => {
    setNumberDisplayed("");
    setFirstNumberOfOperation("");
    setSecondNumberOfOperation("");
  };

  return (
    <div className="content">
      <div className="result">
        <input
          value={numberDisplayed}
          onChange={(event) => setNumberDisplayed(event.target.value)}
        />
      </div>
      <div className="keyboard">
        <button
          type="button"
          onClick={resetNumber}
          style={{ color: "#26a692" }}
        >
          AC
        </button>
        <button type="button" style={{ color: "#26a692" }}>
          +/-
        </button>
        <button
          type="button"
          style={{ color: "#26a692" }}
          onClick={() => handleResult("%")}
        >
          %
        </button>
        <button type="button" onClick={() => handleAddOperation("÷")}>
          <FaDivide />
        </button>
        <button type="button" onClick={() => handleUseNumber("7")}>
          7
        </button>
        <button type="button" onClick={() => handleUseNumber("8")}>
          8
        </button>
        <button type="button" onClick={() => handleUseNumber("9")}>
          9
        </button>
        <button type="button" onClick={() => handleAddOperation("x")}>
          <FaTimes />
        </button>
        <button type="button" onClick={() => handleUseNumber("4")}>
          4
        </button>
        <button type="button" onClick={() => handleUseNumber("5")}>
          5
        </button>
        <button type="button" onClick={() => handleUseNumber("6")}>
          6
        </button>
        <button type="button" onClick={() => handleAddOperation("-")}>
          <FaMinus />
        </button>
        <button type="button" onClick={() => handleUseNumber("1")}>
          1
        </button>
        <button type="button" onClick={() => handleUseNumber("2")}>
          2
        </button>
        <button type="button" onClick={() => handleUseNumber("3")}>
          3
        </button>
        <button type="button" onClick={() => handleAddOperation("+")}>
          <FaPlus />
        </button>
        <button type="button" onClick={resetNumber}>
          <FaUndo color="#f9f9fa" />
        </button>
        <button type="button" onClick={() => handleUseNumber("0")}>
          0
        </button>
        <button type="button" onClick={() => handleUseNumber(".")}>
          .
        </button>
        <button type="button" onClick={() => handleResult}>
          <FaEquals />
        </button>
      </div>
    </div>
  );
}
