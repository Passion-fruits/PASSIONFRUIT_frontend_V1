import { InputComponentParams } from "../../interfaces/upload";
import * as s from "./styles";

export default function InformationInput({title,placeholder}:InputComponentParams) {
  return (
    <s.InforWrapper>
      <s.InforTitle>{title}</s.InforTitle>
      <s.Input placeholder={placeholder}/>
    </s.InforWrapper>
  );
}
