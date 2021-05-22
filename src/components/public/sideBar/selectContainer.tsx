import * as s from "./styles";
import { SelectParams } from "./../../../interfaces/feed";

export default function Select({
  title,
  controlDropDown,
  dropDownBool,
  arr,
  selectTitle,
  AllOption,
}: SelectParams) {
  return (
    <>
      <s.SelectTitle>{title}</s.SelectTitle>
      <s.SelectContainer
        onClick={controlDropDown}
        style={dropDownBool ? { height: `${(arr.length + 1) * 40}px` } : {}}
      >
        <s.SelectVal>
          <span>{selectTitle}</span>
          <i
            className="fas fa-chevron-down"
            style={dropDownBool ? { transform: "rotate(-180deg)" } : {}}
          ></i>
        </s.SelectVal>
        {AllOption}
      </s.SelectContainer>
    </>
  );
}
