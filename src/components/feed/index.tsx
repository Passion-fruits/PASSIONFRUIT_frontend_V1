import { useState } from "react";
import { MusicObject } from "../../interfaces/feed";
import SideBar from "../public/sideBar";
import FeedCard from "./feedCard";
import Recommend from "./recommend";
import * as s from "./styles";

export default function Feed() {
  const Arr: MusicObject[] = [
    {
      name: "Juice World",
      title: "i dont need",
      profile:
        "https://blog.kakaocdn.net/dn/vRZ04/btqAi93lifA/GqUA2NHCG3mzNjiKLGlwhK/img.jpg",
      cover:
        "https://i.pinimg.com/736x/ea/1f/64/ea1f64668a0af149a3277db9e9e54824.jpg",
      genre: "#HIPHOP",
      date: "20.10.12",
      description: "i love this moment",
    },
    {
      name: "eminem",
      title: "Godzila",
      profile: `https://www.biography.com/.image/t_share/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg`,
      cover:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MTJfMjY2/MDAxNTk3MTYwNDgxNjgx.ODXjG1i1tdBKlHY-H3MoFMBbuVykAX3yZnXer65C__gg.LHburZF4UxrxnTI3oKjYbWBshP7MRvmM-_2H3Sx9Y7Mg.JPEG.kjl784000/Music_to_Be_Murderd_By.jpg?type=w800",
      genre: "#HIPHOP",
      date: "20.10.12",
      description: "i love this moment",
    },
    {
      name: "xxx tentacion",
      title: "sad",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/XXXTENTACION_mugshot_12_28_2016.jpg/1200px-XXXTENTACION_mugshot_12_28_2016.jpg",
      cover: "https://i1.sndcdn.com/artworks-6yNLdldkxG5U-0-t500x500.jpg",
      genre: "#HIPHOP",
      date: "20.10.12",
      description: "i love this moment",
    },
  ];
  const [Index, setIndex] = useState<string>("");
  const PlayIndexCheck = (e: string) => {
    setIndex(e);
  };
  return (
    <s.Wrapper>
      <s.Container>
        <s.RecommendWrapper>
          <Recommend />
        </s.RecommendWrapper>
        <SideBar />
        <s.FeedWrapper>
          {Arr.map((e: MusicObject, index: number) => (
            <FeedCard
              key={index}
              name={e.name}
              title={e.title}
              profile={e.profile}
              cover={e.cover}
              func={PlayIndexCheck}
              nowPlay={Index}
              genre={e.genre}
              date={e.date}
              description={e.description}
            />
          ))}
        </s.FeedWrapper>
      </s.Container>
    </s.Wrapper>
  );
}
