import * as s from "../styles";
import { useState } from "react";

export default function Btn() {
  const [good, setGood] = useState<boolean>(false);
  return (
    <s.BtnContainer>
      <s.Btn
        className={good ? "Click" : ""}
        onClick={() => {
          setGood(!good);
        }}
      >
        <i className="fas fa-heart"></i> 1,200
      </s.Btn>
      <s.Btn>
        <i className="fas fa-comment"></i> 1,200
      </s.Btn>
      <s.Btn>
        <i className="fas fa-exclamation-circle"></i> alert
      </s.Btn>
    </s.BtnContainer>
  );
}
