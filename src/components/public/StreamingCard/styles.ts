import styled from "styled-components";
import { COLOR } from "../../../style";

export const CardWrapper = styled.div`
    width: 258px;
    height: 370px;
    border-radius: 10px;
    background: ${COLOR.BACKGROUND_COLOR};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const CardImgWrapper = styled.div`
    width: 218px;
    height: 218px;
    position: relative;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    & ~ button {
        display: none;
    }

    &:hover ~ button {
        display: flex;
    }
`;

export const CardTitle = styled.h2`
    color: white;
    font-size: 19px;
    font-weight: bold;
`;

export const CardUserIcon = styled.img`
    border-radius: 50%;
    width: 23px;
    height: 23px;
    object-fit: cover;
`;

export const CardUserName = styled.h3`
    color: #9d9d9d;
    font-size: 14px;
    font-weight: bold;
`;

export const CardIconWrapper = styled.div`
    width: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
