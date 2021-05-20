import styled from "styled-components";
import { COLOR } from "../../../style";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 170px;
  position: sticky;
  top: 0px;
`;

export const Title = styled.span`
  color: white;
  font-weight: 600;
  font-size: 15px;
`;

export const Refresh = styled.button`
  background: ${COLOR.BACKGROUND_COLOR};
  border: none;
  padding: 3px 15px;
  border-radius: 4px;
  color: gray;
  margin-top: 10px;
  i {
    color: gray;
    font-size: 13px;
  }
`;
