import styled from "styled-components";
import { ButtonInitStyle } from "../../../style";

export const PlayButton = styled.button`
    ${ButtonInitStyle}
    width: 76px;
    height: 76px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #008ffe;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
        display: flex;
    }
`;
