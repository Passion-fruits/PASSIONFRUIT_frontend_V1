import * as S from "./styles";
import { PlayButton } from "../index";

function Card() {
    return (
        <S.CardWrapper>
            <S.CardImgWrapper>
                <S.CardImg />
                <PlayButton callback={() => console.log("ASD")} />
            </S.CardImgWrapper>
        </S.CardWrapper>
    );
}

export default Card;
