import { useState } from "react";

import * as math from "mathjs";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const Matnga_qoshish = (val) => {
    setText(text + val);
  };

  const Natijani_hisoblash = () => {
    const input = text // Remove commas

    setResult(math.evaluate(input));
  };

  const Kirishni_tiklash = () => {
    setText("");
    setResult("");
  };

  const button_rangi = "rgb(18, 163, 156)";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="button-box">
        <div className="row" style={{cursor: "pointer"}}>
          <Button symbol="7" handleClick={Matnga_qoshish} />
          <Button symbol="8" handleClick={Matnga_qoshish} />
          <Button symbol="9" handleClick={Matnga_qoshish} />
          <Button symbol="/" color={button_rangi} handleClick={Matnga_qoshish} />
        </div>
        <div className="row" style={{cursor: "pointer"}}>
          <Button symbol="4" handleClick={Matnga_qoshish} />
          <Button symbol="5" handleClick={Matnga_qoshish} />
          <Button symbol="6" handleClick={Matnga_qoshish} />
          <Button symbol="*" color={button_rangi} handleClick={Matnga_qoshish} />
        </div>
        <div className="row" style={{cursor: "pointer"}}>
          <Button symbol="1" handleClick={Matnga_qoshish} />
          <Button symbol="2" handleClick={Matnga_qoshish} />
          <Button symbol="3" handleClick={Matnga_qoshish} />
          <Button symbol="+" color={button_rangi} handleClick={Matnga_qoshish} />
        </div>
        <div className="row" style={{cursor: "pointer"}}>
          <Button symbol="0" handleClick={Matnga_qoshish} />
          <Button symbol="." handleClick={Matnga_qoshish} />
          <Button symbol="=" handleClick={Natijani_hisoblash} />
          <Button symbol="-" color={button_rangi} handleClick={Matnga_qoshish} />
        </div>
        </div>
        <Button symbol="CLEAR" color="blue" handleClick={Kirishni_tiklash} />
      </div>
    </div>
  );
};

export default App;