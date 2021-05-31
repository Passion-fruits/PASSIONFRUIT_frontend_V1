import { CoverImgProps } from "../../../../interfaces/feed";
import * as s from "../styles";

export default function CoverImg({ cover }: CoverImgProps) {
  return (
    <s.ImgContainer>
      <s.CoverImg src={cover} alt="" />
      <s.CoverImgCover />
    </s.ImgContainer>
  );
}
