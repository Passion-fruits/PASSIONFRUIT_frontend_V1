import * as S from "./styles";
import { TalkSvg, HeartSvg, CloudSvg } from "../../../assets";

function Buttons(props: any) {
    const { comments, hearts, shares } = props;
    return (
        <S.IconsWrapper>
            <S.IconWrapper>
                <TalkSvg />
                <S.Count>1.4k</S.Count>
            </S.IconWrapper>
            <S.IconWrapper>
                <HeartSvg />
                <S.Count>1.4k</S.Count>
            </S.IconWrapper>
            <S.IconWrapper>
                <CloudSvg />
                <S.Count>1.4k</S.Count>
            </S.IconWrapper>
        </S.IconsWrapper>
    );
}

export default Buttons;
