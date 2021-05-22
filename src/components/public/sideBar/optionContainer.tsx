import { useEffect, useState } from "react";
import { OptionParams } from "../../../interfaces/feed";
import * as s from "./styles";

export default function Option({
  option,
  setSelectVal,
  nowOption,
}: OptionParams) {
  const [checked, setChecked] = useState<boolean>(false);
  const OptionClickStyle ={
          padding: "0 20px",
          borderBottom: "1px solid rgb(50,50,50)",
        };
  const ControlSelectVal = () => {
    setSelectVal(option);
  };
  useEffect(() => {
    if (option === nowOption) setChecked(true);
    else setChecked(false);
  }, [nowOption, option]);
  return (
    <s.OptionContainer
      onClick={ControlSelectVal}
      style={OptionClickStyle}
    >
      <input type="checkbox" checked={checked} readOnly /> {option}
    </s.OptionContainer>
  );
}
