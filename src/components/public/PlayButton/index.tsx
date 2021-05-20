import * as S from "./styles";
import { PlaySvg, PauseSvg } from "../../../assets";

function PlayButton(props: any) {
    const { callback, isPlaying } = props;
    return (
        <S.PlayButton onClick={callback}>
            {isPlaying ? <PauseSvg /> : <PlaySvg />}
        </S.PlayButton>
    );
}

export default PlayButton;
