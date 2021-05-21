import * as S from "./styles";
import { PlayButton, Buttons } from "../index";

function Card() {
    return (
        <S.CardWrapper>
            <S.CardImgWrapper>
                <S.CardImg />
                <PlayButton callback={() => console.log("ASD")} />
            </S.CardImgWrapper>
            <S.CardTitle>Why are you ?</S.CardTitle>
            <S.CardUserWrapper>
                <S.CardUserIcon />
                <S.CardUserName>6ix9ine</S.CardUserName>
            </S.CardUserWrapper>
            <Buttons />
        </S.CardWrapper>
    );
}

export default Card;
