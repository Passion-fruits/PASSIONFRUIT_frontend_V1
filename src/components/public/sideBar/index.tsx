import * as s from "./styles";

export default function SideBar() {
  return (
    <s.Wrapper>
      <s.SelectTitle>genre</s.SelectTitle>
      <s.SelectBox>
        <option value="">HIPHOP</option>
      </s.SelectBox>
      <s.SelectTitle>sort</s.SelectTitle>
      <s.SelectBox>
        <option value="">A-Z</option>
      </s.SelectBox>
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
