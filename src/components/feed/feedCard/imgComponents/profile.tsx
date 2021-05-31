import { ProfileProps } from "../../../../interfaces/feed";
import * as s from "../styles";

export default function Profile({ profile, name }: ProfileProps) {
  return (
    <s.ProfileContainer>
      <s.ProfileImg src={profile} alt="" />
      <s.ProfileName>{name}</s.ProfileName>
    </s.ProfileContainer>
  );
}
