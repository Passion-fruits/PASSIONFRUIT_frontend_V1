import { useState } from "react";
import { GenreArr, SortArr } from "../../../utils/export";
import Option from "./optionContainer";
import Select from "./selectContainer";
import * as s from "./styles";

export default function SideBar() {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [genre, setGenre] = useState<string>(GenreArr[0]);
  const [sort, setSort] = useState<string>(SortArr[0]);
  const [sortDropDown, setSortDropDown] = useState<boolean>(false);
  const OptionDropDown = () => {
    setDropDown(!dropDown);
  };
  const SortDropDown = () => {
    setSortDropDown(!sortDropDown);
  };
  const AllOption = GenreArr.map((e: string, index: number) => {
    return (
      <Option
        setSelectVal={setGenre}
        dropDown={dropDown}
        option={e}
        indexNum={index}
        nowOption={genre}
        key={index}
      />
    );
  });
  const AllSortOption = SortArr.map((e: string, index: number) => {
    return (
      <Option
        setSelectVal={setSort}
        dropDown={sortDropDown}
        option={e}
        indexNum={index}
        nowOption={sort}
        key={index}
      />
    );
  });
  return (
    <s.Wrapper>
      <Select
        title="genre"
        controlDropDown={OptionDropDown}
        dropDownBool={dropDown}
        arr={GenreArr}
        selectTitle={genre}
        AllOption={AllOption}
      />
      <Select
        title="sort"
        controlDropDown={SortDropDown}
        dropDownBool={sortDropDown}
        arr={SortArr}
        selectTitle={sort}
        AllOption={AllSortOption}
      />
      <s.MusicPlayerContainer>
        <s.ImgWrapper>
          <s.CoverImg src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MTdfMjEy/MDAxNTM0NDg5OTAxMjUz.Dun-ieIhspxPwMv7pGacLr0D7nSwkar-YHXwGGbEeUMg.H_WaFBvPsxWqGI7NYOoMtwVjALYX4WyS_fusbuInx78g.JPEG.math7wine/1534489899443.jpg?type=w800" />
        </s.ImgWrapper>
        <s.MusicTitle>It's the eminem season 2</s.MusicTitle>
        <s.ProfileWrapper>
          <s.ProfileImg src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MTdfMjEy/MDAxNTM0NDg5OTAxMjUz.Dun-ieIhspxPwMv7pGacLr0D7nSwkar-YHXwGGbEeUMg.H_WaFBvPsxWqGI7NYOoMtwVjALYX4WyS_fusbuInx78g.JPEG.math7wine/1534489899443.jpg?type=w800" />
          <s.ProfileName>Eminem</s.ProfileName>
        </s.ProfileWrapper>
        <s.ControlContainer>
          <i className="fas fa-step-backward"></i>
          <i className="fas fa-play"></i>
          <i className="fas fa-step-forward"></i>
        </s.ControlContainer>
      </s.MusicPlayerContainer>
    </s.Wrapper>
  );
}
