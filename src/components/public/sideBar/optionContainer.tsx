import { useEffect, useState } from "react";
import { OptionParams } from "../../../interfaces/feed";
import * as s from "./styles";

export default function Option({
  dropDown,
  option,
  indexNum,
  setSelectVal,
  nowOption,
}: OptionParams) {
  const [checked, setChecked] = useState<boolean>(false);
  const OptionClickStyle =
    indexNum === 0
      ? {
          padding: "20px 20px 20px 10px",
          borderBottom: "1px solid rgb(50,50,50)",
          marginTop: "10px",
        }
      : {
          padding: "20px 20px 20px 10px",
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
      style={dropDown ? OptionClickStyle : {}}
    >
      <input type="checkbox" checked={checked} /> {option}
    </s.OptionContainer>
  );
}
