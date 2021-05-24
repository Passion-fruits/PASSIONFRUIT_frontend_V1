import { useEffect, useState } from "react";
import Sound from "./sound";
import * as s from "./styles";
import MUSIC_FILE from "../../../assets/audio.mp3";

export default function FeedCard({
  name,
  title,
  profile,
  cover,
  func,
  nowPlay,
}: any) {
  const [good, setGood] = useState<boolean>(false);
  const [playBool, setPlayBool] = useState<boolean>(false);
  const PlayMusic = () => {
    const audio: any = document.getElementById(`${name + title}`);
    if (audio.paused) {
      audio.play();
      func(name + title);
    } else {
      audio.pause();
    }
    setPlayBool(!playBool);
  };
  useEffect(() => {
    const audio: any = document.getElementById(`${name + title}`);
    if (nowPlay !== audio.id) {
      if (audio) {
        audio.pause();
        setPlayBool(false);
      }
    }
  }, [nowPlay,name,title]);
  return (
    <s.Wrapper>
      <audio src={MUSIC_FILE} id={name + title} />
      {/* 프로필 이미지 */}
      <s.ProfileContainer>
        <s.ProfileImg src={profile} alt="" />
        <s.ProfileName>{name}</s.ProfileName>
      </s.ProfileContainer>
      <s.FlexContainer>
        <s.ImgContainer>
          <s.CoverImg src={cover} alt="" />
          <s.CoverImgCover />
        </s.ImgContainer>
        {/* 노래 정보 wrapper */}
        <s.MusicInforContainer>
          {/* 노래 제목 wrapper */}
          <s.TitleWrapper>
            {title}
            <s.Genre>#HIPHOP</s.Genre>
            {/* wave 파형 */}
            {playBool && <Sound />}
          </s.TitleWrapper>
          <s.Date>20.10.11</s.Date>

          {/* 노래 설명 */}
          <s.MusicDescription>
            it's my first rap song!!it's my t rap song!!it's my first rap song!!
          </s.MusicDescription>

          {/* play 바 */}
          <s.PlayBarContainer>
            <s.PlayBtn onClick={PlayMusic}>
              <i className={`fas fa-${playBool ? "pause" : "play"}`} />
            </s.PlayBtn>
            <progress value="0" />
          </s.PlayBarContainer>

          {/* 좋아요/ 댓글/ 신고 버튼 */}
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
        </s.MusicInforContainer>
      </s.FlexContainer>
    </s.Wrapper>
  );
}
