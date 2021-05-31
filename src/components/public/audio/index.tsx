import { useEffect, useRef, useState } from "react";
import { PlayBarProps } from "../../../interfaces/audio";
import * as s from "./styles";

export default function PlayBarComponent({ id, nowPlay, play, Music }: PlayBarProps) {
  const [playBool, setPlayBool] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [change, setChange] = useState<boolean>(false);
  const changeRef = useRef(change);
  const PlayBoolRef = useRef(playBool);
  changeRef.current = change;
  PlayBoolRef.current = playBool;
  const PlayMusic = () => {
    const audio: any = document.getElementById(`${id}`);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setPlayBool(!playBool);
  };
  useEffect(() => {
    setPlayBool(play);
    if (play) {
      PlayMusic();
    }
  }, [play]);
  useEffect(() => {
    const audio: any = document.getElementById(`${id}`);
    if (nowPlay !== audio.id) {
      if (audio) {
        audio.pause();
        setPlayBool(false);
      }
    }
  }, [nowPlay, id, playBool]);
  useEffect(() => {
    setTimeout(() => {
      if (!PlayBoolRef.current) {
        return;
      }
      if (changeRef.current) {
        setChange(false);
        return;
      }
      setTime(time + 1);
    }, 1000);
  }, [playBool, time]);
  const ReturnDuration = (): number => {
    const audio: any = document.getElementById(`${id}`);
    if (audio) {
      if (time > audio.duration) {
        audio.pause();
        setTime(0);
        setPlayBool(false);
      }
      return audio.duration;
    }
    return 0;
  };
  const ReturnValue = (): number => {
    if (isNaN(100 * (time / ReturnDuration()))) {
      return 0;
    } else {
      return 100 * (time / ReturnDuration());
    }
  };
  const TimeMove = (e: any): void => {
    const audio: any = document.getElementById(`${id}`);
    const t: HTMLElement = e.target;
    const leftOnView = t.getBoundingClientRect().left;
    const TimeLinePx = Math.round(e.clientX - leftOnView);
    const TimeLine = (100 * TimeLinePx) / t.offsetWidth;
    if (audio) {
      setChange(true);
      audio.currentTime = Math.round((audio.duration * TimeLine) / 100);
      setTime(Math.round((audio.duration * TimeLine) / 100));
    }
  };
  return (
    <>
      <audio src={Music} id={id} />
      <s.PlayBar>
        <s.TimeLine onClick={TimeMove} />
        <s.Progress width={ReturnValue()} />
      </s.PlayBar>
    </>
  );
}
