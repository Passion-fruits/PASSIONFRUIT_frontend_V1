import { OPTION_ARR } from "../../style";
import ProfileImg from "../public/uploadProfile/profileImg";
import InformationInput from "./informationInput";
import * as s from "./styles";

export default function Upload() {
  return (
    <s.Wrapper>
      <s.Container>
        <ProfileImg borderRadius={0} />
        <s.InpContainer>
          <InformationInput
            title="Title"
            placeholder="Please enter the song title"
          />
          <InformationInput
            title="Description"
            placeholder="Please enter a song description"
          />
          <s.InforWrapper>
            <s.InforTitle>Genre</s.InforTitle>
            <s.Select>
              {OPTION_ARR.map((e: string, index: number) => (
                <option key={index}>{e}</option>
              ))}
            </s.Select>
          </s.InforWrapper>
          <s.InforWrapper>
            <s.InforTitle>Music selection</s.InforTitle>
            <s.SoundCloudBox>MUSIC UPLOAD</s.SoundCloudBox>
          </s.InforWrapper>
          <s.InforWrapper>
            <s.InforTitle>Highlight cut</s.InforTitle>
          </s.InforWrapper>
          <s.AlertSpan>
            ( All listening is uploaded to streaming, and highlights are
            uploaded to feed. )
          </s.AlertSpan>
          <s.SubmitBtn>UPLOAD</s.SubmitBtn>
        </s.InpContainer>
      </s.Container>
    </s.Wrapper>
  );
}
