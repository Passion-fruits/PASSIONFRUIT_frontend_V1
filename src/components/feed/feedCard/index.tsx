import { useEffect, useState } from "react";
import * as s from "./styles";
import PlayBarComponent from "./../../public/audio/index";
import MUSIC_FILE from "../../../assets/audio4.mp3";
import Btn from "./AnyComponents/Btn";
import Profile from "./imgComponents/profile";
import CoverImg from "./imgComponents/coverImg";
import MusicInfor from "./AnyComponents/musicInfor";
import { FeedCardProps } from "../../../interfaces/feed";

export default function FeedCard({
  func,
  nowPlay,
  name,
  title,
  genre,
  date,
  description,
  profile,
  cover,
}: FeedCardProps) {
  const [playBool, setPlayBool] = useState<boolean>(false);
  const playMusic = (): void => {
    if (!playBool) func(name + title);
    else func("");
    setPlayBool(!playBool);
  };
  useEffect(() => {
    if (name + title !== nowPlay) setPlayBool(false);
  }, [name, title, nowPlay]);
  return (
    <s.Wrapper>
      <Profile name={name} profile={profile} />
      <s.FlexContainer>
        <CoverImg cover={cover} />
        <s.MusicInforContainer>
          <MusicInfor
            title={title}
            genre={genre}
            date={date}
            description={description}
            playBool={playBool}
          />
          {/* play 바 */}
          <s.PlayBarContainer>
            <s.PlayBtn onClick={playMusic}>
              <i className={`fas fa-${playBool ? "pause" : "play"}`} />
            </s.PlayBtn>
            <PlayBarComponent
              id={name + title}
              nowPlay={nowPlay}
              play={playBool}
              Music={MUSIC_FILE}
            />
          </s.PlayBarContainer>
          <Btn />
        </s.MusicInforContainer>
      </s.FlexContainer>
    </s.Wrapper>
  );
}
