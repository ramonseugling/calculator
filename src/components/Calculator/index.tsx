import "./styles.scss";
import {
  FaPlus,
  FaMinus,
  FaDivide,
  FaEquals,
  FaTimes,
  FaPercentage,
  FaUndo,
} from "react-icons/fa";

export function Calculator() {
  return (
    <div className="content">
      <div className="result">
        <input type="number" />
      </div>
      <div className="keyboard">
        <button type="button" style={{ color: "#26a692" }}>
          AC
        </button>
        <button type="button" style={{ color: "#26a692" }}>
          +/-
        </button>
        <button type="button" style={{ color: "#26a692" }}>
          %
        </button>
        <button type="button">
          <FaDivide />
        </button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">
          <FaTimes />
        </button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="count-operation">
          <FaMinus />
        </button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">
          <FaPlus />
        </button>
        <button type="button">
          <FaUndo color="#f9f9fa" />
        </button>
        <button type="button">0</button>
        <button type="button">.</button>
        <button type="button" className="count-operation">
          <FaEquals />
        </button>
      </div>
    </div>
  );
}
