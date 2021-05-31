import * as s from "../styles";
import Sound from "./sound";
import { MusicInforProps } from "../../../../interfaces/feed";

export default function MusicInfor({
  title,
  genre,
  date,
  description,
  playBool,
}: MusicInforProps) {
  return (
    <>
      <s.TitleWrapper>
        {title}
        <s.Genre>{genre}</s.Genre>
        {/* wave 파형 */}
        {playBool && <Sound />}
      </s.TitleWrapper>
      <s.Date>{date}</s.Date>
      <s.MusicDescription>{description}</s.MusicDescription>
    </>
  );
}
