export interface SubHeaderParams {
  title: string;
  description: string;
}

export interface OptionParams {
  dropDown: boolean;
  option: string;
  indexNum: number;
  setSelectVal: any;
  nowOption: string;
}

export interface SelectParams {
  controlDropDown: any;
  dropDownBool: boolean;
  arr: any[];
  selectTitle: string;
  title: string;
  AllOption: any;
}

export interface WaveParams {
  second: number;
}

export interface ProgressParams {
  width: number;
}

export interface CoverImgProps {
  cover: string;
}

export interface Infor {
  title: string;
  genre: string;
  date: string;
  description: string;
}

export interface MusicInforProps extends Infor {
  playBool: boolean;
}

export interface ProfileProps {
  profile: string;
  name: string;
}

export interface FeedCardProps extends Infor, CoverImgProps, ProfileProps {
  func(e: string): void;
  nowPlay: string;
}

export interface MusicObject extends ProfileProps, Infor, CoverImgProps {}
