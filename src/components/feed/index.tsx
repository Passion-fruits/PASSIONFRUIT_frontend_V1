import SideBar from "../public/sideBar";
import FeedCard from "./feedCard";
import Recommend from "./recommend";
import * as s from "./styles";

export default function Feed() {
  return (
    <s.Wrapper>
      <s.Container>
        <s.RecommendWrapper>
          <Recommend />
        </s.RecommendWrapper>
        <SideBar />
        <s.FeedWrapper>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </s.FeedWrapper>
      </s.Container>
    </s.Wrapper>
  );
}
